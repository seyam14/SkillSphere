/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const CategoryCard = ({cart}) => {
 
    const  {
        _id,
        CourseTitle,
        DeadLine,
        Description,
        Price,
      }=cart;
  
      return (
        <div className="card lg:card-side bg-sky-300 md:h-[300px] my-8 shadow-xl">
         <div className="card-body">
          <h2 className="card-title "><span className="font-bold ">Course Title: </span> {CourseTitle}</h2>
          <h2 ><span className="font-bold "> Course DeadLine:</span> {DeadLine}</h2>
          <h2><span className="font-bold "> Price : </span>{Price}</h2>
          <h2><span className="font-bold ">Description: </span>{Description}</h2>
          <Link to ={`/courseDetails/${_id}`} >
            <button className="btn btn-neutral">More details</button>
          </Link>
        </div>
        </div>
      );
    };
  
export default CategoryCard;