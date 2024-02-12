
// import logo from '../../assets/LMS.svg';

import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <div>
    <Helmet>
        <title>LMS|About</title>
       </Helmet>
    <div className="bg-gray-300  justify-center items-center">  
      <div className="w-full p-8 bg-white rounded-lg shadow-md">
        {/* <img src={logo} alt="Logo" className="mx-auto mb-6" /> */}
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4"> Learning Management System</h1>
        <p className="text-gray-700 mb-4">
          Our Learning Management System (LMS) is designed to provide a seamless learning experience for both students and educators. With a user-friendly interface and powerful features, our platform empowers users to create, manage, and deliver engaging educational content.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you are a teacher looking to create interactive courses or a student eager to learn new skills, our LMS has you covered. From quizzes and assignments to progress tracking and collaboration tools, we offer everything you need to succeed in your educational journey.
        </p>
        <p className="text-gray-700 mb-4">
          Our team is dedicated to continuously improving the platform, so you can expect regular updates and new features to enhance your learning experience. Join us today and embark on a journey of knowledge and discovery!
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
