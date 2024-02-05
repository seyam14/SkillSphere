
import { Helmet } from "react-helmet";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Category from "../Category/Category";


const Courses = () => {
    
    
    return (
     <div>
        <Helmet>
        <title>LMS|Courses</title>
       </Helmet>
        <SectionTitle
        subHeading="Embark on a Journey  through  E-Learning Modules"
        heading="Unlock the Secrets of Online Success"></SectionTitle>
        <div>
           <h4 className="text-xl m-4">Dive into a world of knowledge with our e-learning courses. Explore dynamic content, interactive lessons, and expert guidance.Search as need to learn courses</h4>
           <div className="flex items-center justify-center ">
        <div >
        <input
          type="text"
          placeholder="Search here..."
          className="border border-red-300 px-4 py-2 rounded-full outline-none"
        />
        <button className="btn btn-neutral"> Search </button>
      </div>
    </div>
        </div>
           <Category></Category> 
    </div>
    );
};

export default Courses;