import { useState } from 'react';
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

      const response = await axios.post('https://skillsphere-server-side.vercel.app/seller', formDataToSend);
      console.log(response.data);

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Course has been successfully submitted!',
      });

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
    <div className="max-w-4xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>LMS | Sell Course</title>
      </Helmet>

      <SectionTitle
        subHeading="If you want to sell your course, please fill out the form. We will contact you if needed."
        heading="Sell Course Form"
      />

      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 shadow-lg rounded-lg p-8
          sm:p-10
          transition-transform transform hover:scale-[1.02] duration-300"
      >
        {/* Using grid with 1 or 2 columns depending on screen size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="title" className="block text-blue-900 font-semibold mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              value={formData.title}
              required
              placeholder="Course title"
              className="w-full rounded-md border border-blue-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-blue-900 font-semibold mb-2">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="price"
              id="price"
              onChange={handleChange}
              value={formData.price}
              required
              placeholder="Course price"
              className="w-full rounded-md border border-blue-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-blue-900 font-semibold mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              name="description"
              id="description"
              onChange={handleChange}
              value={formData.description}
              required
              placeholder="Briefly describe your course"
              className="w-full rounded-md border border-blue-400 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="skills" className="block text-blue-900 font-semibold mb-2">
              Skills
            </label>
            <input
              type="text"
              name="skills"
              id="skills"
              onChange={handleChange}
              value={formData.skills}
              placeholder="Skills taught (optional)"
              className="w-full rounded-md border border-blue-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-blue-900 font-semibold mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              onChange={handleChange}
              value={formData.phoneNumber}
              required
              placeholder="+880123456789"
              className="w-full rounded-md border border-blue-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="file" className="block text-blue-900 font-semibold mb-2">
              Demo File <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={handleChange}
              required
              accept=".pdf,.mp4,.zip,.rar,.doc,.docx"
              className="w-full rounded-md border border-blue-400 px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-md shadow-md
              hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseSellForm;
