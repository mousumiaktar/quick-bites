const About = () => {
    return (
        <div className="grid py-16 justify-center mx-auto">
            <div className="grid lg:px-48 px-12 lg:grid-cols-2 md:grid-cols-2 justify-center items-center gap-2">
                <div className="">
                    <p className="text-red-500">ABOUT THE FOOD RESTAURANT</p>
                    <h1 className="lg:text-3xl font-bold">
                        New Ground with Dishes to be Enjoyed
                    </h1>
                </div>
                <div className="">
                    <p>
                        Nisl quam nestibulum ac quam nec odio eleme aucan ligula. Orci
                        varius nat oque pena tibus et urient monte nascete ridiculus mus
                        nellentesq um ac qu am nec odio rbine. Nisl quam nestibu aucan
                        ligula.
                    </p>
                </div>
            </div>
            <div className="grid lg:px-48 px-12 lg:grid-cols-3 md:grid-cols-3 mt-6 justify-center items-center gap-4">
                <img
                    src="	https://winsfolio.net/html/foodio/assets/img/restaurant-2.jpg"
                    alt=""
                    className="rounded-xl"
                />
                <img
                    src="	https://winsfolio.net/html/foodio/assets/img/restaurant.jpg"
                    alt=""
                    className="rounded-xl lg:mt-12"
                />
                <img
                    src="	https://winsfolio.net/html/foodio/assets/img/restaurant-3.jpg"
                    alt=""
                    className="rounded-xl"
                />
            </div>
        </div>
    );
};

export default About;