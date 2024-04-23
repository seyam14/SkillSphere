import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import useAxios from '../../Hooks/useAxios';

const CategoryCard = ({ cart }) => {
    const { CourseTitle, DeadLine, Description, Price ,_id} = cart;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxios();

  //
  const handleAddToCart = () => {
    if (user && user.email) {
        // send cart item to the database
        const cartItem = {
            courseId: _id,
            email: user.email,
            CourseTitle,
            DeadLine,
            Price
        }
        axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${CourseTitle} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
    }
    else {
        Swal.fire({
            title: "You are not Logged In",
            text: "Please login to add to the cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   send the user to the login page
                navigate('/login' , { state: { from: location } })
                
            }
        });
    }
}
    

    return (
        <div className="card lg:card-side bg-sky-300 md:h-[300px] my-8 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">
                    <span className="font-bold">Course Title: </span> {CourseTitle}
                </h2>
                <h2>
                    <span className="font-bold"> Course DeadLine:</span> {DeadLine}
                </h2>
                <h2>
                    <span className="font-bold"> Price : </span>
                    {Price}
                </h2>
                <h2>
                    <span className="font-bold">Description: </span>
                    {Description}
                </h2>
                <button className="btn btn-neutral" onClick={handleAddToCart}>
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default CategoryCard;
