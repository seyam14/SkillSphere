import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";


const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <h2 className="text3-xl">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Course Titles</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>${payment.price}</td>
                                <td>{payment.transactionId}</td>
                                <td>
                                    {payment.CourseTitle.map((course, index) => (
                                        <div key={index}>
                                               {course.CourseTitle}
                                        </div>
                                    ))}
                                </td>
                                <td>{payment.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
