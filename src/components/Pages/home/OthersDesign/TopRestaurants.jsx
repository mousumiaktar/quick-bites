import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const TopRestaurants = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1560 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 1560, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 780 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 780, min: 0 },
            items: 1,
        },
    };


    return (
        <div className="container mx-auto">
            <h1 className="text-center font-bold text-2xl">Several Popular Restaurant</h1>
            <div className="py-4 shadow-xl mt-8">
                <Carousel responsive={responsive}>
                    <div className="flex justify-center items-center">
                        <img className="h-[150px] w-[150px] rounded-full " src="https://static.hungrynaki.com/hungrynaki-v4/restaurants/kudos/meta/kudos_cover_1639914186733.jpeg" alt="" />

                    </div>
                    <div className="flex justify-center items-center">
                        <img className="h-[150px] w-[150px] rounded-full " src="https://static.hungrynaki.com/hungrynaki-v4/restaurants/coffee_world/meta/coffee_world_cover_1643777841066.png" alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="h-[150px] w-[150px] rounded-full " src="https://static.hungrynaki.com/hungrynaki-v4/restaurants/tasty_treat/meta/tasty_treat_cover_1640143913547.jpeg" alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="h-[150px] w-[150px] rounded-full " src="https://static.hungrynaki.com/hungrynaki-v4/restaurants/kudos/meta/kudos_cover_1639914186733.jpeg" alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="h-[150px] w-[150px] rounded-full " src="https://static.hungrynaki.com/hungrynaki-v4/restaurants/pizza_masters/meta/pizza_masters_cover_1639049105176.jpeg" alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="h-[150px] w-[150px] rounded-full " src="https://static.hungrynaki.com/hungrynaki-v4/restaurants/mithai/meta/mithai_cover_1637814953936.jpeg" alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="h-[150px] w-[150px] rounded-full " src="https://static.hungrynaki.com/hungrynaki-v4/restaurants/secret_recipe/meta/secret_recipe_cover_1639913900478.jpeg" alt="" />
                    </div>

                </Carousel>
            </div>
        </div>

    );
};

export default TopRestaurants;




