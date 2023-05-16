import auth from '../../../../firebase.init';
import Swal from "sweetalert2";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDeleteOrderMutation, useGetOrderWithEmailQuery } from '../../../../features/api/ApiSlice';
import Loading from '../../../shared/Loading';
import { Link } from 'react-router-dom';
import { BsCheck2Circle } from "react-icons/bs";

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const { data, isLoading } = useGetOrderWithEmailQuery(user?.email);
    if (isLoading) {
        <Loading />
    }
    //  console.log('order dat',data)

    const [deleteOrder] = useDeleteOrderMutation();

    const handleDeleteOrder = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You Delete This Food",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteOrder(id);
                Swal.fire("Deleted!", "Food has been deleted.", "success");
            }
        });
    };

    return (
        <div className="overflow-x-auto h-screen pt-8">
            <table className="table-auto w-full">
                <thead className="bg-orange-500">
                    <tr>
                        <th className="px-4 py-2">Index</th>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Food-Name</th>
                        <th className="px-4 py-2">Quantity</th>
                        <th className="px-4 py-2">Total Price</th>

                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((order, index) => (
                        <>
                            <tr>
                                <th className="border px-4 py-2">{index + 1}</th>
                                <td className="border px-4 py-2">
                                    <img className="h-12" src={order.img} alt="" />
                                </td>
                                <td className="border px-4 py-2">{order.name}</td>
                                <td className="border px-4 py-2">{order.quantity}</td>
                                <td className="border px-4 py-2">Tk.{order.totalPrice}</td>

                                <td className="border px-4 py-2">
                                    <div className='flex  justify-around'>
                                        <button
                                            className="bg-red-500 px-2 mx-2  rounded text-white"
                                            onClick={() => handleDeleteOrder(order?._id)}
                                        >
                                            Delete
                                        </button>
                                        <div className="">
                                            {(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='text-white bg-black px-3 rounded pb-1'>pay</button></Link>}
                                            {(order.totalPrice && order.paid) && <div>
                                                <p className='flex items-center gap-2'><span className='text-green-600 font-bold '>Paid</span> <span><BsCheck2Circle className='text-green-700' size={20} /></span> </p>
                                                <p><span className='text-red-600'>{order.transactionId}</span></p>
                                            </div>}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </>
                    ))}
                    ;
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;