import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";

import SectionTitle from "../../SectionTitle/SectionTitle";
import Category from "../Category/Category";
import FAQ from "../FAQ/FAQ";



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
            <FAQ></FAQ>
        </div>
    );
};

export default Home;