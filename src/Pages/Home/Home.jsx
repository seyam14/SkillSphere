import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";

import SectionTitle from "../../SectionTitle/SectionTitle";
import Category from "../Category/Category";



const Home = () => {
    return (
        <div>
        <Helmet>
        <title>LMS|Home</title>
       </Helmet> 
            <Banner></Banner>
            <div>
            <SectionTitle  subHeading="Here E-Learning Courses" 
            heading="Browse By Category"></SectionTitle>
            <Category></Category>
            </div>
            
            
        </div>
    );
};

export default Home;