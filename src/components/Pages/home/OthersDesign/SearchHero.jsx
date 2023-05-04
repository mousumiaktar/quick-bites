import { BsFillCheckCircleFill } from 'react-icons/bs';

const SearchHero = () => {
    return (
        <div>
            <div className="py-48 px-12 h-screen w-full"
                style={{
                    backgroundImage: `url("https://foodbakery.chimpgroup.com/homev1/wp-content/uploads/call-to-action-paralax.jpg")`,
                }}
            >
                <div className="mt-8">
                    <h1 className="text-6xl text-center text-white font-bold">BEST ORGANIC FAST FOOD
                        IN GALAXY</h1>
                    <h3 className="text-4xl text-center text-white mt-8">
                        Its the food and groceries you love, delivered
                    </h3>
                </div>

                <div className="flex justify-center gap-2 mt-12">
                    <input
                        name="email"
                        className="mt-1 px-3 py-6 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:orange-500 block lg:w-[50%]  w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Enter Your Email"
                    />

                    <button className="bg-red-500 py-4 rounded-xl px-12 font-bold text-white">
                        Search
                    </button>
                </div>
            </div>
            <div className="bg-[#EB6825] py-8">
                <div className="md:container mx-auto px-6 md:grid grid-cols-3">
                    <div className=" flex justify-center">
                        <div className='flex items-center gap-2'>
                            <span className='text-white'><BsFillCheckCircleFill /></span>
                            <div className="text-white text-xl"><span className="text-2xl">8</span> Restaurant</div>
                        </div>
                    </div>
                    <div className=" flex justify-center">
                        <div className='flex items-center gap-2'>
                            <span className='text-white'><BsFillCheckCircleFill /></span>
                            <div className="text-white text-xl"><span className="text-2xl">111</span> People Served</div>
                        </div>
                    </div>
                    <div className=" flex justify-center">
                        <div className='flex items-center gap-2'>
                            <span className='text-white'><BsFillCheckCircleFill /></span>
                            <div className="text-white text-xl"><span className="text-2xl">50</span> Registerd Users</div>
                        </div>
                    </div>
                    {/* <div className=" flex justify-center">
                        <div className='flex items-center gap-2'>
                            <span className='text-white'><BsFillCheckCircleFill /></span>
                            <div className="text-white text-xl"><span className="text-2xl">1000</span> Visitors</div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SearchHero;