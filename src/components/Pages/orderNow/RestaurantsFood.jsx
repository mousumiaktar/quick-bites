import { useParams } from "react-router-dom";
import { useGetRestaurantByIdQuery } from '../../../features/api/ApiSlice';
import Loading from '../../shared/Loading';
import { AiOutlineHeart, AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import {addToCart} from "../../../features/cart/cartSlice";
import { useDispatch } from "react-redux";



const RestaurantsFood = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data, isLoading, isSuccess } = useGetRestaurantByIdQuery(id, {
        pollingInterval: 500,
    });


    if (isLoading) {
        <Loading />;
    }
    if (isSuccess) {
        console.log(data);
    }


    return (
        <div className="container mx-auto">
            <div className="card shadow-xl">
                <img
                    src={data?.resimg}
                    className="w-full lg:h-[25rem]"
                    alt=""
                />
                <div className="flex justify-between items-center px-2">
                    <div>
                        <h2 className="text-2xl font-bold">{data?.resname}</h2>
                    </div>
                    <div className="py-6 px-2 flex gap-12">
                        <h1>
                            Delivery Time: <span className="font-bold">45 mins</span>
                        </h1>
                        <h1>
                            Min Order: Tk.<span className="font-bold">{data?.minOrder}</span>
                        </h1>
                        <h1>
                            Delivery Fee: Tk.<span className="font-bold">{data?.delfee}</span>
                        </h1>
                    </div>
                </div>
            </div>

            <div className="md:flex lg:flex justify-between gap-6">
                <div className="md:w-[82%] lg:w-[82%]">
                    {data?.food.map((food) => (
                        <>
                            <div className="">
                                <div className=" flex justify-between mt-2 p-2 border border-gray-300">
                                    <div className="w-[50%]">
                                        <div>
                                            <h1 className="font-bold">{food.fname}</h1>
                                            <h1 className="mt-2">{food.ftype}</h1>
                                        </div>
                                        <hr className="mt-16" />
                                        <div className="flex justify-between gap-2 items-center">
                                            <AiOutlineHeart size={20} />
                                            <div className="flex items-center gap-4">
                                                <h1 className="font-bold clas">$ {food.price}</h1>
                                                <BsPlusCircle size={20}
                                                onClick={() => dispatch(addToCart(data))}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-[20%]">
                                        <img className="w-[150px] h-[150px]" src={food.fimg} alt="aly" />
                                    </div>

                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div className="md:w-[300px] lg:w-[300px] mt-5 border border-gray-300">
                    <div className="flex justify-between items-center py-4 px-1">
                        <p className="text-[#F26B39]">Food Terminal</p>
                        <small>2 Items Added</small>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between mt-2 px-1 py-4">
                        <div>
                            <p className="font-bold">Food Name</p>
                            {/* <small>No Toppings</small> */}
                        </div>
                        <div className="flex items-center gap-4">
                            <p>Tk. 320</p>
                            <div className="flex items-center gap-2">
                                <AiOutlineMinusSquare />
                                <p>3</p>
                                <AiOutlinePlusSquare />
                            </div>
                        </div>
                        <div>
                            <p>TK.640</p>
                        </div>

                    </div>
                    <hr />
                    <div>
                        <div className="flex justify-between items-center px-1 py-4">
                            <p>Food Price</p>
                            <p>TK. 640</p>
                        </div>
                        <div  className="flex justify-between items-center px-1 py-4">
                            <p>Delivery Fee</p>
                            <p>TK. 36</p>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center px-1 py-4 font-bold">
                            <p>Total</p>
                            <p>TK. 676</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RestaurantsFood;