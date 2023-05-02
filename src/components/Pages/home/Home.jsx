import About from "./OthersDesign/About";
import HowItWorks from "./OthersDesign/HowItWorks";
import MobileApp from "./OthersDesign/MobileApp";
import SearchHero from "./OthersDesign/SearchHero";
import TwoCart from "./OthersDesign/TwoCart";
import Restaurants from "./Restaurants";
import TopRestaurants from "./OthersDesign/TopRestaurants";
import AboutTeam from "./OthersDesign/AboutTeam";
import Ldb from "../bdl/Ldb";
import Celebration from "../celebration/Celebration";


const Home = () => {
    return (
        <div>
            <SearchHero />
            <Ldb />
            <HowItWorks />
            <Restaurants />
            <Celebration />
            <TwoCart />
            <TopRestaurants />
            <AboutTeam />
            <About />
            <MobileApp />
        </div>
    );
};

export default Home;