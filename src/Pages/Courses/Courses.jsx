
import { Helmet } from "react-helmet";
import SectionTitle from "../../SectionTitle/SectionTitle";

import CourseCategory from "../CourseCategory/CourseCategory";


const Courses = () => {
    
    
    return (
     <div>
        <Helmet>
        <title>LMS|Courses</title>
       </Helmet>
        <SectionTitle
        subHeading="Embark on a Journey  through  E-Learning Modules"
        heading="Unlock the Secrets of Online Success"></SectionTitle>
           <CourseCategory></CourseCategory>
    </div>
    );
};

export default Courses;