import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";


const Home = () => {
    return (
        <div>
        <Helmet>
        <title>LMS|Home</title>
       </Helmet> 
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

export default Home;