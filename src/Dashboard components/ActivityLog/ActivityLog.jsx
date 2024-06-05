import Swal from "sweetalert2";
import SectionTitle from "../../SectionTitle/SectionTitle";
import useCart from "../../Hooks/useCart";
import useAxios from "../../Hooks/useAxios";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ActivityLog = () => {
    const [cart, refetch] = useCart();
    console.log("Cart:", cart);

    // Ensure all prices are numbers and handle empty cart
    const totalPrice = cart.length ? cart.reduce((total, item) => {
        const price = parseFloat(item?.Price); // Access 'Price' attribute and convert to number
        return isNaN(price) ? total : total + price; // Add price if it's a valid number
    }, 0) : 0;

    console.log(totalPrice);

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
                <h2 className="text-4xl">Items: {cart.length}</h2>
                <h2 className="text-4xl">Total Price: {totalPrice.toFixed(2)}</h2> {/* Ensure totalPrice is rounded to 2 decimal places */}
                {cart.length ? <Link to="/dashboard/payment">
                    <button className="btn btn-secondary">Pay</button>
                </Link> :
                <button disabled className="btn btn-secondary">Pay</button>
                }
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
                        {cart?.map((course, index) => (
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ActivityLog;
