import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const Celebration = () => {
  //duruthemes.com/demo/html/florya/img/services/4.jpg
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h1
            className="text-3xl text-white text-center mb-6 bg-orange-600 inline-block px-8 py-2 rounded-tl-2xl rounded-br-2xl
        "
          >
            CELEBRATIONS FOOD
          </h1>
        </div>
        <p className="text-xl text-center text-[#333333]">Explore restaurants, bars, and cafés by locality</p>

        <div className="flex  sm:py-6 items-center justify-center">
          <div
            data-aos="fade-right"
            className="grid grid-cols-1 gap-5 xl:gap-16 md:grid-cols-3 lg:grid-cols-4"
          >
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow border-4 border-orange-500 rounded-tl-2xl rounded-br-2xl hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125"
                  src="https://fooddy.ancorathemes.com/wp-content/uploads/2021/09/product-18-copyright-540x440.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b  to-black from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white bg-red-600 w-full py-1 rounded-md">
                  Drinks
                </h1>
                <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolore adipisci placeat.
                </p>
                <Link to="/drink">
                  <button className="rounded-full bg-red-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-4 border-orange-500 rounded-tl-2xl rounded-br-2xl"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125"
                  src="https://media.istockphoto.com/id/184944791/photo/chocolate-candies-and-gift-box.jpg?s=612x612&w=0&k=20&c=b0PfysplWFgcB97pPn0p4IBz1ieEns5UPu2aO3c6dRk="
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b  to-black from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white bg-red-600 w-full py-1 rounded-md">
                  Gifts
                </h1>
                <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolore adipisci placeat.
                </p>
                <Link to="/gift">
                  <button className="rounded-full bg-red-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-4 border-orange-500 rounded-tl-2xl rounded-br-2xl"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125"
                  src="https://www.yoranchsteakhouse.com/wp-content/uploads/2019/11/holiday-party-at-a-restaurant-900x600.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b  to-black from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white bg-red-600 w-full py-1 rounded-md">
                  Party
                </h1>
                <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolore adipisci placeat.
                </p>
                <Link to="/party">
                  <button className="rounded-full bg-red-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-4 border-orange-500 rounded-tl-2xl rounded-br-2xl"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5r-KdiGXlOZQ7gbQgTa6TkTsJf4agzSAAw&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b  to-black from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white bg-red-600 w-full py-1 rounded-md">
                  Birthday
                </h1>
                <p className="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolore adipisci placeat.
                </p>
                <Link to="/birthday">
                  <button className="rounded-full bg-red-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Celebration;




/*

  




*/