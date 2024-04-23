import  { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../SectionTitle/SectionTitle';

const CourseSellForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        skills: '',
        price: '',
        file: null, 
        phoneNumber: '', 
    });

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFormData({ ...formData, file: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = {
                title: formData.title,
                description: formData.description,
                skills: formData.skills,
                price: formData.price,
                phoneNumber: formData.phoneNumber,
                file: formData.file, 
            };

            const response = await axios.post('http://localhost:5000/seller', formDataToSend);
            console.log(response.data);
            
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Course has been successfully submitted!',
            });
            // Clear form fields after successful like refetch
            setFormData({
                title: '',
                description: '',
                skills: '',
                price: '',
                file: null,
                phoneNumber: '',
            });
        } catch (error) {
            console.error('Error:', error.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-8">
            <Helmet>
                <title>LMS|sell course</title>
            </Helmet>
            <SectionTitle  subHeading="if you can sell your course then fillup the form.we will contact if needed" 
            heading="Sell Course form"></SectionTitle>
            <form onSubmit={handleSubmit} className="bg-sky-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input type="text" name="title" onChange={handleChange} value={formData.title} required
                        className="border rounded w-full py-2 px-3 text-gray-700" />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <textarea rows={3} name="description" onChange={handleChange} value={formData.description} required
                        className="border rounded w-full py-2 px-3 text-gray-700" />
                </div>

                <div className="mb-4">
                    <label htmlFor="skills" className="block text-gray-700 text-sm font-bold mb-2">Skills</label>
                    <input type="text" name="skills" onChange={handleChange} value={formData.skills}
                        className="border rounded w-full py-2 px-3 text-gray-700" />
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                    <input type="text" name="price" onChange={handleChange} value={formData.price} required
                        className="border rounded w-full py-2 px-3 text-gray-700" />
                </div>

                <div className="mb-4">
                    <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">File Demo</label>
                    <input type="file" name="file" id="file" onChange={handleChange} required
                        className="border rounded w-full py-2 px-3 text-gray-700" />
                </div>

                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                    <input type="tel" name="phoneNumber" id="phoneNumber" onChange={handleChange} value={formData.phoneNumber} required
                        className="border rounded w-full py-2 px-3 text-gray-700" />
                </div>

                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CourseSellForm;
