import  { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Ldb = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className="bg-[url('https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp')]" >
            <div className="flex py-6 items-center justify-center">
                <div className="grid grid-cols-1   gap-5 md:grid-cols-3 lg:grid-cols-4">
                    <div
                        data-aos="zoom-in"
                        className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
                    >
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="https://hips.hearstapps.com/hmg-prod/images/quick-breakfast-ideas-huevos-rancheros-1658515011.jpeg"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">
                                Breakfast
                            </h1>
                            <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                dolore adipisci placeat.
                            </p>
                            <Link to="/breakfast">
                                <button className="rounded-full bg-red-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                    See Food
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in"
                        className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
                    >
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgKst_SAQNcGaM2i8Dad_HWx2d7nxh1qWYO6nVZPQk936Ch7mJIovdsSS2MHRVqyHahUY&usqp=CAU"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">Lunch</h1>
                            <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                dolore adipisci placeat.
                            </p>
                            <Link to="/lunch">
                                <button className="rounded-full bg-red-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                    See Food
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in"
                        className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
                    >
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="https://wossthemes.com/jack/wp-content/uploads/2018/01/blog_image_4.jpg"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">Dinner</h1>
                            <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                dolore adipisci placeat.
                            </p>
                            <Link to="/dinner">
                                <button className="rounded-full bg-red-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                    See Food
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in"
                        className="group relative  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
                    >
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqXDvM5vizax5boDUbiQCQQdpetbMBd4IWNsYVJYre2pXLr4eFW30Ana9DiSf-PMm96wE&usqp=CAU"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">
                                Night Drink
                            </h1>
                            <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                dolore adipisci placeat.
                            </p>
                            <Link to="/morningcoffee">
                                <button className="rounded-full bg-red-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
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