import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import useAxios from '../../Hooks/useAxios';

const CategoryCard = ({ cart }) => {
  const { CourseTitle, DeadLine, Description, Price, _id } = cart;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxios();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        courseId: _id,
        email: user.email,
        CourseTitle,
        Description,
        DeadLine,
        Price,
      };
      axiosSecure.post('/carts', cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${CourseTitle} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: 'You are not Logged In',
        text: 'Please login to add to the cart?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, login!',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto my-8 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl shadow-2xl transform transition duration-300 hover:scale-[1.03] hover:shadow-3xl overflow-hidden">
      <div className="flex flex-col md:flex-row p-6 md:p-8 gap-6">
        {/* Left section */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 drop-shadow-lg">
              {CourseTitle}
            </h2>
            <p className="text-sm md:text-base text-white/90 mb-4 line-clamp-3">{Description}</p>
          </div>
          <div className="flex items-center gap-4 text-white/90 text-sm md:text-base">
            <div>
              <span className="font-semibold">Deadline:</span> {DeadLine}
            </div>
            <div>
              <span className="font-semibold">Price:</span> ${Price}
            </div>
          </div>
        </div>

        {/* Right section: Buttons */}
        <div className="flex flex-col justify-center gap-4 md:w-40">
          <Link
            to={`/details/${_id}`}
            className="btn bg-white text-blue-700 font-bold hover:bg-blue-100 shadow-lg transition"
          >
            Details
          </Link>
          <button
            onClick={handleAddToCart}
            className="btn bg-blue-900 text-white font-semibold hover:bg-blue-800 shadow-lg transition"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
