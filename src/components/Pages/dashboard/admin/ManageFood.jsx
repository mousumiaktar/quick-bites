import { useDeleteFoodMutation, useGetAllFoodQuery } from "../../../../features/api/ApiSlice";
import Loading from "../../../shared/Loading";
import Swal from "sweetalert2";
// import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState } from "react";


const ManageFood = () => {
    const { data, isLoading, } = useGetAllFoodQuery();
    // console.log(data);
    if (isLoading) {
        <Loading />
    }
    const [search, setSearch] = useState('');

    const [deleteFood] = useDeleteFoodMutation();

    const handleDeletefood = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You Delete This Food",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then(result => {
            if (result.isConfirmed) {
                deleteFood(id);
                Swal.fire("Deleted!", "Food has been deleted.", "success");
            }
        });
    };


    return (
        <div className="overflow-x-auto h-screen mt-5">
            <div className="flex justify-center">
                <input className="border-2 border-gray-500 w-[50%] py-2 px-2 rounded-lg mb-5" type="search" name="" id="" onChange={(e) => setSearch(e.target.value)} placeholder="Search for food name...." />
            </div>
            <table className="table-auto w-full">
                <thead className="bg-orange-500">
                    <tr>
                        <th className="px-4 py-2">Index</th>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Food-Name</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Food-Type</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.filter((food) => {
                            return search.toLowerCase() === ''
                              ? food
                              : food.fname.toLowerCase().includes(search);
                          }).map((food, index) => (
                            <>
                                <tr>
                                    <th className="border px-4 py-2">{index + 1}</th>
                                    <td className="border px-4 py-2">
                                        <img className='h-12 w-16' src={food.fimg} alt='' />
                                    </td>
                                    <td className="border px-4 py-2">{food.fname}</td>
                                    <td className="border px-4 py-2">{food.price} TK.</td>
                                    <td className="border px-4 py-2">{food.ftype}</td>
                                    <td className="border px-4 py-2">
                                        <div className="flex justify-around">
                                        <button
                                            onClick={() => handleDeletefood(food._id)}
                                            className='text-red-600 px-2 rounded'
                                        >
                                           <RiDeleteBin5Line  size={20} />
                                        </button>
                                        {/* <button
                                            className='text-red-600 px-2 rounded '
                                        >
                                           <FaRegEdit size={20} />
                                        </button> */}
                                    </div></td>
                                    
                                </tr>
                            </>
                        ))
                    };

                </tbody>
            </table>
        </div>
    );
};

export default ManageFood;