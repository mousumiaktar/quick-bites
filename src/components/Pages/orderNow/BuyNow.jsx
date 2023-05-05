import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaSadTear } from "react-icons/fa";
import { deleteToCart } from "../../../features/api/cartSlice";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { useAddOrderMutation } from "../../../features/api/ApiSlice";

const BuyNow = () => {
  const [user] = useAuthState(auth)
  const cart = useSelector((state) => state.cart);
  const [postOrder, { isLoading, isSuccess, isError }] = useAddOrderMutation();
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const [select, setSelect] = useState(0);


  useEffect(() => {
    if (isLoading) {
      return <p>Loading....................</p>;
    }
    if (isSuccess) {
      alert("post success");
    }
    if (isError) {
      return <p>error</p>;
    }
  }, []);



  const handleOrder = () => {
    const orderData = {
      totalPrice: quantity * cart[0]?.price + parseInt(select),
      quantity: quantity,
      img: cart[0]?.fimg,
      name: cart[0]?.fname,
      email: user?.email,
    };
    console.log(orderData);
    postOrder(orderData)
  };



  const handleChange = (e) => {
    const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1;
    setQuantity(value);
  };

  const address = (event) => setSelect(event.target.value);

  return (
    <div className="h-screen">
      <div className="py-6 px-6">
        {cart.length > 0 ? (
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-start-1 lg:col-end-8">
              <div className="">
                {cart?.map((food) => (
                  <>
                    <div className="card shadow-xl rounded-xl flex justify-between px-12 mt-6 items-center">
                      <img src={food.fimg} alt="aly" className="w-[25%]" />
                      <div className="">
                        <div className="flex items-center justify-center gap-6">
                          <button
                            className="text-3xl"
                            onClick={() => {
                              if (quantity > 1) {
                                setQuantity((pre) => pre - 1);
                              }
                            }}
                          >
                            -
                          </button>

                          <div className="w-[20px]">
                            <input
                              type="number"
                              value={quantity}
                              onChange={handleChange}
                            />
                          </div>
                          <button
                            onClick={() => setQuantity((pre) => pre + 1)}
                            className="text-3xl"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="">
                        <h1 className="font-bold">{food.fname}</h1>

                        <h1 className="font-bold text-red-500 ">
                          $ {food.price}
                        </h1>
                      </div>
                      <div className="text-3xl text-red-500">
                        <RiDeleteBinLine
                          onClick={() => dispatch(deleteToCart(food))}
                        ></RiDeleteBinLine>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div className="lg:col-start-9 lg:col-end-12  border-2 px-6 py-2">
              <div className="grid ">
                <select
                  required
                  className="border border-gray-400 w-[100%]  p-2 rounded-xl mb-2"
                  onChange={address}
                >
                  <option value={0}>Select</option>
                  <option value={10}>Chittagong</option>
                  <option value={20}>Dhaka</option>
                  <option value={30}>Rajshahi</option>
                  <option value={40}>Dinajpur</option>
                </select>
                <div className="flex justify-between text-xl">
                  quantity : <span className="font-bold">{quantity}</span>
                </div>
                <div className="flex justify-between mt-2 mb-6 text-xl">
                  Devivery : <span className="font-bold">{select}</span>
                </div>
                <hr />
                <div className="flex justify-between text-xl mt-2">
                  total :{" "}
                  <span className="font-bold ">
                    {quantity * cart[0]?.price + parseInt(select)}
                  </span>
                </div>
              </div>
              <button
                onClick={handleOrder}
                className="btn p-2 lg:mt-12  rounded-xl text-white font-bold bg-red-500 w-full"
              >
                Order Now
              </button>
              {isSuccess && <p className="text-center text-green-500 font-bold"> wow your order success </p>}
            </div>
          </div>
        ) : (
          <div className="flex text-center justify-center items-center text-4xl text-red-500">
            <h1 className="lg:text-4xl text-center"> Items Not Found </h1>
            <FaSadTear></FaSadTear>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyNow;