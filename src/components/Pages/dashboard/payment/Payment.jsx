import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../../../shared/Loading';

const stripePromise = loadStripe('pk_test_51L0gMADuiIiaFlXNz9N5k6HXIPhnvURpmXcZeRZKvElE1vRaWTc2jUCiZQo6KHnurxrTpsvhinpjyKGlXZRDVFwg00cdBRF6R2');

const Payment = () => {
    const { id } = useParams();
    const url = `https://quickbites.onrender.com/myorder/${id}`;

    const { data: order, isLoading } = useQuery(['myorder', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='h-screen'>
            <div className="w-50 max-w-md shadow-xl my-12 p-6 rounded-md">
                <div>
                    <h2 className="text-xl font-bold mb-2">Pay for <span className='text-orange-600'>{order.name}</span></h2>
                    <p>Your products quantity <span className='font-bold'>{order.quantity}</span></p>
                    <p>Please pay: <span className='text-red-600 font-bold'>${order.totalPrice}</span></p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="w-50 max-w-md shadow-xl my-12 p-6 rounded-md">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;