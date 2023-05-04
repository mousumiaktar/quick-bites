
const HowItWorks = () => {

    return (
        <div
            className="py-20 px-16  mb-16"
            style={{
                backgroundImage: `url("https://www.khanidani.com/assets/images/works.jpg")`,
            }}
        >
            <h1 className="text-center text-3xl mb-2 font-bold">HOW IT WORKS</h1>
            <p className="text-center">Get your favourite food in 4 simple steps</p>
            <div className="grid md:grid-cols-3 justify-center py-2 sm:grid-cols-2 gap-4 mt-12">
               
                <div className="">
                    <div className="grid justify-center">
                        <img
                            src="https://www.khanidani.com/assets/images/step2.png"
                            alt=""
                            className="bg-red-500 rounded-full"
                        />
                    </div>
                    <h1 className="text-2xl text-center mt-2 mb-2 ">Choose A Restaurant</h1>
                    <p className="text-center">
                    Dictum velit. Duis at purus enim. Cras massa massa.
                    </p>
                </div>
                <div className="">
                    <div className="grid justify-center">
                        <img
                            src="https://www.khanidani.com/assets/images/step3.png"
                            alt=""
                            className="bg-red-500 rounded-full"
                        />
                    </div>
                    <h1 className="text-2xl text-center mt-2 mb-2 ">Pay For your Order</h1>
                    <p className="text-center">
                    Dictum velit. Duis at purus enim. Cras massa massa. 
                    </p>
                </div>
                <div className="">
                    <div className="grid justify-center">
                        <img
                            src="https://www.khanidani.com/assets/images/step4.png"
                            alt=""
                            className="bg-red-500 rounded-full"
                        />
                    </div>
                    <h1 className="text-2xl text-center mt-2 mb-2 ">And Enjoy Yourself</h1>
                    <p className="text-center">
                    Dictum velit. Duis at purus enim. Cras massa massa.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;