import { AiFillStar } from "react-icons/ai";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { useGetReviewQuery } from "../../../../features/api/ApiSlice";
import Loading from "../../../shared/Loading";

const Reviews = () => {
    const { data, isLoading } = useGetReviewQuery();
    console.log(data);
    if (isLoading) {
       return <Loading />;
    }


    return (
        <div className="mt-5 mb-10 ">
            <div className="py-6 container mx-auto lg:px-0 md:px-6 px-6">
                <h1 className="lg:text-3xl text-center font-bold mb-6">
                    What People Say About Us
                </h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      "@1.00": {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      "@1.50": {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                    }}
                    modules={[Pagination]}
                    className="place-items-center"
                >
                    {data?.map((review) => (
                        <>
                            <SwiperSlide>
                                <div className="card border p-6 rounded-xl h-[200px]">
                                    <p>
                                        {review.review}
                                    </p>
                                    <div className="flex justify-between items-center mt-2">
                                        <div>
                                            <h1 className="text-2xl font-bold">{review.name}</h1>
                                            <h1 className="text-red-600 font-bold">({review.date})</h1>
                                        </div>
                                        <div className="flex">
                                            <AiFillStar className="text-yellow-400"></AiFillStar>
                                            <AiFillStar className="text-yellow-400"></AiFillStar>
                                            <AiFillStar className="text-yellow-400"></AiFillStar>
                                            <AiFillStar className="text-yellow-400"></AiFillStar>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;