
import SectionTitle from "../../SectionTitle/SectionTitle";

const ActivityLog = () => {
    

    

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
                    {/* <tbody>
                        {userCourses.map((course, index) => (
                            <tr key={course._id}>
                                <td>{index + 1}</td>
                                <td>{course.title}</td>
                                <td>{course.category}</td>
                                <td>{course.description}</td>
                                <td>{course.price}</td>
                                <td>
                                    <button className="btn btn-secondary" onClick={() => removeCourse(course._id)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody> */}
                </table>
            </div>
        </div>
    );
};

export default ActivityLog;
