import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";

const ActivityLog = ({ userEmail }) => {
    const [userCourses, setUserCourses] = useState([]);

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        // Filter courses by user email
        const filteredCourses = cartData.filter(course => course.userEmail === userEmail);
        setUserCourses(filteredCourses);
    }, [userEmail]);

    const removeCourse = (index) => {
        const updatedCourses = [...userCourses];
        // Remove the course 
        updatedCourses.splice(index, 1);
        setUserCourses(updatedCourses);
        //  update the localStorage 
        localStorage.setItem("cart", JSON.stringify(updatedCourses));
    };

    return (
        <div>
            <SectionTitle subHeading="Course Information" heading="Courses Enrolled by You" />
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Course Title</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {userCourses.map((course, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{course.CourseTitle}</td>
                                <td>{course.category}</td> 
                                <td>{course.Description}</td>
                                <td>{course.Price}</td>
                                <td>
                                    <button className="btn btn-secondary" onClick={() => removeCourse(index)}>Remove</button>
                                </td> 
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ActivityLog;
