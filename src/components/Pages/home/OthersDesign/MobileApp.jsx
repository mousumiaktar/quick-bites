import { RxAvatar } from "react-icons/rx";
import { BsGooglePlay } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";

const MobileApp = () => {
    return (
        <div className="px-12  bg-[#dee2e6]">
            <div className="grid py-2  lg:grid-cols-2 md:grid-cols-2  justify-center items-center">
                <div className="mt-6">
                    <h2 className="font-bold text-red-600">
                        BEST APP FOR FOODS ORDERING
                    </h2>
                    <h1 className="lg:text-4xl font-bold text-black mt-2 mb-2">
                        Manage Your Restaurant <br /> Anytime! Anywhere!
                    </h1>
                    <div className="mt-6">
                        <div className="flex  gap-2 items-center">
                            <RxAvatar className="text-yellow-500 "></RxAvatar>
                            <p>Higher Reach - Minimal Effort</p>
                        </div>
                        <div className="flex  gap-2 items-center">
                            <RxAvatar className="text-yellow-500 "></RxAvatar>
                            <p>Showcase your Brand</p>
                        </div>
                        <div className="flex  gap-2 items-center">
                            <RxAvatar className="text-yellow-500 "></RxAvatar>
                            <p>Exclusive offers & discounts</p>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-6">
                        <div className="flex justify-center items-center gap-2 bg-red-500 rounded-xl p-3 shadow-xl">
                            <BsGooglePlay className="text-3xl"></BsGooglePlay>
                            <div className="">
                                <p>Download From</p>
                                <h2>play Store</h2>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-2 bg-black text-white rounded-xl p-3 shadow-xl">
                            <AiFillApple className="text-3xl"></AiFillApple>
                            <div className="">
                                <p>Download From</p>
                                <h2>play Store</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid justify-center  md:order-last  order-first">
                    <img
                        src="https://winsfolio.net/html/foodio/assets/img/manage-your.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default MobileApp;