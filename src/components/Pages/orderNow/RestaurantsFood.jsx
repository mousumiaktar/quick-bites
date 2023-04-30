
import { useParams } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import Loading from "../../shared/Loading";
import { addToCart } from "../../../features/api/cartSlice";
import { useGetRestaurantByIdQuery } from "../../../features/api/ApiSlice";




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
    // console.log(data);
  }

    const handleAddToCart = (food) => {
      dispatch(
        addToCart(food)
      );
      alert("added Successfully!");
    };

 
  return (
    <div className="px-6 py-6">
      <div className="card shadow-xl">
        <img
          src="https://i.ibb.co/nz0km6D/342503319-140442705542636-4010482716675888779-n-1.jpg"
          className="w-full lg:h-[25rem]"
          alt=""
        />
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

      <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2  px-16 py-6 gap-4">
        {data?.food.map((food) => (
          <>
            <div className="card shadow-xl">
              <img src={food.fimg} alt="aly" />
              <div className="mt-2 p-2">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold">{food.fname}</h1>

                  <div className="flex gap-2 items-center">
                    <h1 className="font-bold ">$ {food.price}</h1>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <h1 className="">{food.ftype}</h1>
                  <h1 className="">
                    <AiOutlinePlus
                      onClick={() => handleAddToCart(food)}
                      className="rounded-full text-2xl bg-red-500 text-white font-bold"
                    ></AiOutlinePlus>
                  </h1>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

    </div>
  );
};

export default RestaurantsFood;