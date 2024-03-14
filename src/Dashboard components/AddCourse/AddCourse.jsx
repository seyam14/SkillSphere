import { useContext } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const AddCourse = () => {
    const {user}=useContext(AuthContext)
    
    const handleAddCourse = e => {
        e.preventDefault();
    const form = new FormData(e.currentTarget);
    const newJob = {
      email: form.get("email"),
      CourseTitle: form.get("CourseTitle"),
      DeadLine: form.get("DeadLine"),
      category: form.get("category"),
      Description: form.get("Description"),
      Price: form.get("Price"),
    };
    console.log(newJob);

         // send data to the server
         fetch(`http://localhost:5000/addcourse`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Course Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                      })
                }
            })

    }

    return (
        <div className="bg-sky-300 p-24">
            <Helmet>
                <title>LMS|Add Course</title>
            </Helmet>
        <h2 className="text-3xl font-extrabold text-center">Add Course </h2>
        
        <form onSubmit={handleAddCourse } >
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> E-mail</span>
                    </label>
                    <label className="input-group">
                        <input type="email" name="email"  placeholder="email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Course  Title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="CourseTitle" placeholder="CourseTitle" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form DeadLine and category row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">DeadLine</span>
                    </label>
                    <label className="input-group">
                        <input type="date" name="DeadLine" placeholder="DeadLine" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="w-1/2 pl-2 mb-4">
            <label className="text-gray-600" htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-100"
              required
            >
              <option value="Select a category" >Select a category</option>
              <option value="Web Development">Web Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphics Design">Graphics Design</option>
            </select>
          </div>
        </div>

            
            {/* form Description and price*/}
            <div className="md:flex mb-8 gap-2">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="Description" placeholder="Description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="Price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                
                </div>
            
            {/* button */}
            <input type="submit" value="Add Course" className="btn btn-block" />

        </form>
    </div>
);
};


export default AddCourse;