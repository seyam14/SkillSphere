import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FAQ from "../FAQ/FAQ";


const Home = () => {
    return (
        <div>
        <Helmet>
        <title>LMS|Home</title>
       </Helmet> 
            <Banner></Banner>
            <Category></Category>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;