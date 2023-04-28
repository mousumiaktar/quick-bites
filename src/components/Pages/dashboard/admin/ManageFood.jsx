import { useDeleteFoodMutation, useGetAllFoodQuery } from "../../../../features/api/ApiSlice";
import Loading from "../../../shared/Loading";
import Swal from "sweetalert2";

const ManageFood = () => {
    const { data, isLoading, } = useGetAllFoodQuery();
    // console.log(data);
    if (isLoading) {
        <Loading />
    }

    


    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Food-Name</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Food-Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((food, index) => <tr>
                            <th>{index + 1}</th>
                            <td className="border px-4 py-2">
                                <img className='h-12' src={food.fimg} alt='' />
                            </td>
                            <td className="border px-4 py-2">{food.fname}</td>
                            <td className="border px-4 py-2">{food.price} TK.</td>
                            <td className="border px-4 py-2">{food.ftype}</td>
                            <td className="border px-4 py-2"><button
                                
                                className='bg-red-500 px-2 rounded text-white'
                            >
                                DELETE
                            </button></td>
                        </tr>)
                    };

                </tbody>
            </table>
        </div>
    );
};

export default ManageFood;