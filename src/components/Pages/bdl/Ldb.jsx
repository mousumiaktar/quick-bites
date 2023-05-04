import  { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Ldb = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className=" mt-10 py-4" >
            <h4 className="text-red-500 font-bold text-3xl py-3 text-center"> Meals Three Times</h4>
            <div className="flex py-6 items-center justify-center">
                <div className="grid grid-cols-1 gap-5 xl:gap-16 md:grid-cols-4  ">
                    <div
                        data-aos="zoom-in"
                        className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-4 border-orange-500"
                    >
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500"
                                src="https://foodbakery.chimpgroup.com/homev1/wp-content/uploads/cover-photo17-359x212.jpg"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="text-3xl font-bold text-white bg-red-600 w-full py-1 rounded-md">
                                Breakfast
                            </h1>
                            <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                dolore adipisci placeat.
                            </p>
                            <Link to="/breakfast">
                                <button className="rounded-full bg-red-600 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                    See Food
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in"
                        className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-4 border-orange-500"
                    >
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500"
                                src="https://foodbakery.chimpgroup.com/homev1/wp-content/uploads/cover-photo10-359x212.jpg"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="text-3xl font-bold text-white bg-red-600 w-full py-1 rounded-md">Lunch</h1>
                            <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                dolore adipisci placeat.
                            </p>
                            <Link to="/lunch">
                                <button className="rounded-full bg-red-600 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                    See Food
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in"
                        className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-4 border-orange-500"
                    >
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500"
                                src="https://foodbakery.chimpgroup.com/homev1/wp-content/uploads/cover-photo24-359x212.jpg"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="text-3xl font-bold text-white bg-red-600 w-full py-1 rounded-md">Dinner</h1>
                            <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                dolore adipisci placeat.
                            </p>
                            <Link to="/dinner">
                                <button className="rounded-full bg-red-600 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                    See Food
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in"
                        className="group relative  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-4 border-orange-500"
                    >
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500"
                                src="https://foodbakery.chimpgroup.com/homev1/wp-content/uploads/cover-photo09-359x212.jpg"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="text-3xl font-bold text-white bg-red-600 w-full py-1 rounded-md">
                                Night Drink
                            </h1>
                            <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                dolore adipisci placeat.
                            </p>
                            <Link to="/morningcoffee">
                                <button className="rounded-full bg-red-600 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                    See Food
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ldb;