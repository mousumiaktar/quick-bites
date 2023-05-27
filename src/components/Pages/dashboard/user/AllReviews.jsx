import { AiFillStar } from "react-icons/ai";
import { useGetReviewQuery } from "../../../../features/api/ApiSlice";
import Loading from "../../../shared/Loading";

const AllReviews = () => {
    const { data, isLoading } = useGetReviewQuery();
    console.log(data);
    if (isLoading) {
        return <Loading />;
    }


    return (
        <div className="h-screen">
            <h2 className="text-2xl font-bold mt-5 text-center"><u>OUR ALL CUSTOMERS REVIEWS</u></h2>
            <div className="md:grid grid-cols-3 gap-4 mt-5">
                {data?.map((review) => (
                    <>

                        <div>
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
                        </div>

                    </>
                ))}

            </div>

        </div>
    );
};

export default AllReviews;