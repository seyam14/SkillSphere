
import Swal from "sweetalert2";
import SectionTitle from "../../SectionTitle/SectionTitle";
import useCart from "../../Hooks/useCart";
import useAxios from "../../Hooks/useAxios";
import { FaTrashAlt } from "react-icons/fa";

const ActivityLog = () => {
    const [cart, refetch] = useCart();
    console.log(cart);

    const axiosSecure = useAxios();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    
    return (
        <div>
            <SectionTitle subHeading="Course Information" heading="Courses Enrolled by You" />
            <div className="flex justify-evenly mb-8">
                <h2 className="text-4xl">Items: {Array.isArray(cart) ? cart.length : 0}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Course Title</th>
                            <th>Description</th>
                            <th>DeadLine</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { cart?.map((course, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{course?.CourseTitle}</td>
                                <td>{course?.Description}</td>
                                <td>{course?.DeadLine}</td>
                                <td>{course?.Price}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(course._id)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600" />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-secondary">
                                        pay
                                    </button>
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
