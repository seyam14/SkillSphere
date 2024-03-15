import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";

import SectionTitle from "../../SectionTitle/SectionTitle";
import Category from "../Category/Category";
import FAQ from "../FAQ/FAQ";
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div>
        <Helmet>
        <title>LMS|Home</title>
       </Helmet> 
            <Banner></Banner>
            <div className="m-4 p-6">
            <Link to="/roadMap"> 
            <button className="btn btn-outline btn-accent">Lets know road to learn</button>
            </Link>   
            </div>
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