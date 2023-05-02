import  { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const Celebration = () => {
  //duruthemes.com/demo/html/florya/img/services/4.jpg
  useEffect(() => {
     AOS.init({ duration: 2000 });
   }, []);
   return (
    <div className=" py-4 bg-[#dee2e6] bg-[url('https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp')]">
      <div className="container mx-auto">
        <h1
          className="text-3xl text-red-500 text-center mb-6
        "
        >
          CELEBRATIONS FOOD
        </h1>

        <div className="flex  sm:py-6 items-center justify-center">
          <div
            data-aos="fade-right"
            className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4"
          >
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktHa3vt445X2akQK_UC-ORKwh7o6gqGLZMQ&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
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
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMjrmCeL4StTkTeFnYlDetLG5o0Z-kulHTA&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
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
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKAs8Bvjdy-Zuv14HB67I_CSlTIFK468jlw&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
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
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa7m6jzhbVsUA6Vrxp8uI7kVBhrO1r2JvYwL3aMvACbwPZIVjUUQC8PBwwa5GUXAJYycA&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
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