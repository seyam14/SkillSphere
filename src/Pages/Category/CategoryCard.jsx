// CategoryCard.js
import Swal from 'sweetalert2';

const CategoryCard = ({ cart }) => {
    const { CourseTitle, DeadLine, Description, Price } = cart;

    const addToCart = () => {
        // Display SweetAlert2 confirmation
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to add this course to your cart?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Store cart data in local storage
                const cartData = JSON.parse(localStorage.getItem("cart")) || [];
                cartData.push(cart);
                localStorage.setItem("cart", JSON.stringify(cartData));
                Swal.fire(
                    'Added!',
                    'Course has been added to your cart.',
                    'success'
                );
            }
        });
    };

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
                <button className="btn btn-neutral" onClick={addToCart}>
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default CategoryCard;
