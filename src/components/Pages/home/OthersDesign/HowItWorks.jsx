
const HowItWorks = () => {

    return (
        <div
            className="py-32 px-16"
            style={{
                backgroundImage: `url("https://www.khanidani.com/assets/images/works.jpg")`,
            }}
        >
            <h1 className="text-center text-3xl mb-2 font-bold">How it works</h1>
            <p className="text-center">Get your favourite food in 4 simple steps</p>
            <div className="grid lg:grid-cols-4 justify-center py-2 sm:grid-cols-2 gap-4">
                <div className="card   shadow-xl p-12">
                    <div className="grid justify-center">
                        <img
                            src="https://www.khanidani.com/assets/images/step1.png"
                            alt=""
                            className="bg-red-500 rounded-full"
                        />
                    </div>
                    <h1 className="text-3xl text-center mt-2 mb-2 ">Search</h1>
                    <p className="text-center">
                        Find all restaurants available near you
                    </p>
                </div>
                <div className="card   shadow-xl p-12">
                    <div className="grid justify-center">
                        <img
                            src="https://www.khanidani.com/assets/images/step2.png"
                            alt=""
                            className="bg-red-500 rounded-full"
                        />
                    </div>
                    <h1 className="text-3xl text-center mt-2 mb-2 ">Choose</h1>
                    <p className="text-center">
                        Find all restaurants available near you
                    </p>
                </div>
                <div className="card  r shadow-xl p-12">
                    <div className="grid justify-center">
                        <img
                            src="https://www.khanidani.com/assets/images/step3.png"
                            alt=""
                            className="bg-red-500 rounded-full"
                        />
                    </div>
                    <h1 className="text-3xl text-center mt-2 mb-2 ">Pay</h1>
                    <p className="text-center">
                        Find all restaurants available near you
                    </p>
                </div>
                <div className="card  shadow-xl p-12">
                    <div className="grid justify-center">
                        <img
                            src="https://www.khanidani.com/assets/images/step4.png"
                            alt=""
                            className="bg-red-500 rounded-full"
                        />
                    </div>
                    <h1 className="text-3xl text-center mt-2 mb-2 ">Enjoy</h1>
                    <p className="text-center">
                        Find all restaurants available near you
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;