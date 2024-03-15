// ActivityLog.js
import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";

const ActivityLog = ({ userEmail }) => {
    const [userCourses, setUserCourses] = useState([]);

    useEffect(() => {
        // Fetch courses from local storage
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        // Filter courses by user email
        const filteredCourses = cartData.filter(course => course.userEmail === userEmail);
        setUserCourses(filteredCourses);
    }, [userEmail]);

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
                        </tr>
                    </thead>
                    <tbody>
                        {userCourses.map((course, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{course.CourseTitle}</td>
                                <td>{course.category}</td>
                                <td>{course.Description}</td>
                                <td>{course.Price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ActivityLog;
