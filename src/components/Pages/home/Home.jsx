import HowItWorks from "./OthersDesign/HowItWorks";
import SearchHero from "./OthersDesign/SearchHero";
import TwoCart from "./OthersDesign/TwoCart";

const Home = () => {
    return (
        <div>
            <SearchHero />
            <HowItWorks />
            <TwoCart />
        </div>
    );
};

export default Home;