import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { _id, totalPrice, name } = order;

    useEffect(() => {
        fetch('https://quickbites.onrender.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);

        // Confirm Card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congrats! Your payment is completed');

            //    Store payment on database
            const payment = {
                order: _id,
                transactionId: paymentIntent._id
            }
            fetch(`https://quickbites.onrender.com/myorder/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ payment })
            }).then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log(data);
                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='bg-black text-white px-2 rounded-md mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}</p>
                    <p>Your transaction Id: <span className='text-orange-500 font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;