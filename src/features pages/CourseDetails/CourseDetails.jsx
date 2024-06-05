import {  useLoaderData } from "react-router-dom";



const CourseDetails = () => {
  const details = useLoaderData();
  const {
    CourseTitle,
    Description,
    DeadLine,
    Price
} = details;
console.log(details);

  return (
    <div className="card lg:card-side  my-20 h-[250px] bg-base-300 shadow-xl m-5">
      <div className="card-body">
        <h2 className="card-title">CourseTitle:{CourseTitle}</h2>
        <h2><span className="font-semibold">Description:</span> {Description}</h2>
        <h2><span className="font-semibold">DeadLine :</span> {DeadLine}</h2>
        <h2><span className="font-semibold">Price :</span> {Price}</h2>
      </div>
    </div>
  );
};

export default CourseDetails;