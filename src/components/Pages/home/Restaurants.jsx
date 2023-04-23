import { AiFillStar } from "react-icons/ai";

const Restaurants = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-1  px-16 py-6 gap-4">
                <div className="card shadow-xl">
                    <img
                        src="https://images.deliveryhero.io/image/fd-bd/LH/y3yt-listing.jpg?width=400&height=292"
                        alt=""
                    />
                    <div className="mt-2 p-2">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold">Ridima Restaurant</h1>
                            <div className="flex gap-2 items-center">
                                <AiFillStar className="text-yellow-500"></AiFillStar>
                                <p>3.7</p>
                            </div>
                        </div>
                        <h1>Dhaka</h1>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <img
                        src="https://images.deliveryhero.io/image/fd-bd/LH/y3yt-listing.jpg?width=400&height=292"
                        alt=""
                    />
                    <div className="mt-2 p-2">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold">Ridima Restaurant</h1>
                            <div className="flex gap-2 items-center">
                                <AiFillStar className="text-yellow-500"></AiFillStar>
                                <p>3.7</p>
                            </div>
                        </div>
                        <h1>Dhaka</h1>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <img
                        src="https://images.deliveryhero.io/image/fd-bd/LH/y3yt-listing.jpg?width=400&height=292"
                        alt=""
                    />
                    <div className="mt-2 p-2">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold">Ridima Restaurant</h1>
                            <div className="flex gap-2 items-center">
                                <AiFillStar className="text-yellow-500"></AiFillStar>
                                <p>3.7</p>
                            </div>
                        </div>
                        <h1>Dhaka</h1>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <img
                        src="https://images.deliveryhero.io/image/fd-bd/LH/y3yt-listing.jpg?width=400&height=292"
                        alt=""
                    />
                    <div className="mt-2 p-2">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold">Ridima Restaurant</h1>
                            <div className="flex gap-2 items-center">
                                <AiFillStar className="text-yellow-500"></AiFillStar>
                                <p>3.7</p>
                            </div>
                        </div>
                        <h1>Dhaka</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Restaurants;