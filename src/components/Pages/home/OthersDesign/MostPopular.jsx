const MostPopular = () => {
    return (
        <div className=" relative">
            <img className="md:h-[600px] w-full" src="https://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/background-burgers-home-top.jpg" alt="" />
            <div className="absolute mt-[-450px] text-center md:block hidden">
                <h3 className="font-bold bg-red-600 inline text-white text-xl">TASTY & CRUNCHY</h3>
                <h1 className="font-bold text-red-600 text-[70px]">Choose & enjoy</h1>
                <p className="ml-[100px] text-white text-3xl">Inspired by recipes and creations of world’s best chefs</p>
            </div>
        </div>
    );
};

export default MostPopular;