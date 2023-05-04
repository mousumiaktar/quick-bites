import About from "./OthersDesign/About";
import HowItWorks from "./OthersDesign/HowItWorks";
import MobileApp from "./OthersDesign/MobileApp";
import SearchHero from "./OthersDesign/SearchHero";
import TwoCart from "./OthersDesign/TwoCart";
import Restaurants from "./Restaurants";
// import TopRestaurants from "./OthersDesign/TopRestaurants";
import AboutTeam from "./OthersDesign/AboutTeam";
import Ldb from "../bdl/Ldb";
import Celebration from "../celebration/Celebration";
import MostPopular from "./OthersDesign/MostPopular";
// import AboutRestaurant from "./OthersDesign/AboutRestaurant";


const Home = () => {
    return (
        <div>
            <SearchHero />
            <HowItWorks />
            <Restaurants />
            <Ldb />
            <TwoCart />
            <MostPopular />
            <Celebration />
            
            
            {/* <TopRestaurants /> */}
            <AboutTeam />
            <About />
            <MobileApp />
        </div>
    );
};

export default Home;