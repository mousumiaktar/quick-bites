import Loading from "../../shared/Loading";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/api/cartSlice";
// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect } from "react";
import AboutRestaurant from "../home/OthersDesign/AboutRestaurant";
import { useGetBreakfastQuery } from "../../../features/api/ApiSlice";


const BreakFast = () => {
    const { data, isLoading, isSuccess, isError } = useGetBreakfastQuery();

    const dispatch = useDispatch();
    useEffect(() => {
        if (isLoading) {
            <Loading />;
        }
        if (isSuccess) {
            console.log(data);
        }
        if (isError) {
            return <p>error</p>;
        }
    }, []);

    const handleAddToCart = (data) => {
        dispatch(addToCart(data));
        alert("added Successfully!");
    };

    return (
        <div className="md:container mx-auto py-6">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="md:h-[400px] h-[200px] w-full">
                        <img
                            src="https://wossthemes.com/jack/wp-content/uploads/2018/01/blog_image_10.jpg"
                            alt=""
                            className="h-[36rem] w-full"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:h-[400px] h-[200px] w-full">
                        <img
                            src="https://wossthemes.com/jack/wp-content/uploads/2018/01/blog_image_4.jpg"
                            alt=""
                            className="h-[36rem] w-full"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:h-[400px] h-[200px] w-full">
                        <img
                            src="https://wossthemes.com/jack/wp-content/uploads/2018/01/blog_image_7.jpg"
                            alt=""
                            className="h-[36rem] w-full"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>

            <AboutRestaurant />

            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2 lg:gap-4">
                {data?.map((data) => (
                    <>
                        <div className="border">
                            <img className="w-full h-[250px]" src={data?.fimg} alt="" />
                            <h1 className="mt-2 px-2 bg-orange-500 inline font-bold">{data?.fname}</h1>
                            <div className="flex justify-between px-2 py-4 items-center">
                                <h1 className="text-2xl">Tk.{data?.price}</h1>
                                <BsCartPlus
                                    onClick={() => handleAddToCart(data)}
                                    className="text-2xl text-red-500 font-bold"
                                ></BsCartPlus>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default BreakFast;