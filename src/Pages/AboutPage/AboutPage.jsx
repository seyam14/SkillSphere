import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-4 md:p-10 overflow-hidden">
      <Helmet>
        <title>LMS | About</title>
      </Helmet>

      {/* Floating abstract shapes */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-purple-300 rounded-full opacity-20 animate-blob mix-blend-multiply filter blur-xl"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-pink-300 rounded-full opacity-20 animate-blob animation-delay-4000 mix-blend-multiply filter blur-xl"></div>
      <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-indigo-300 rounded-full opacity-20 animate-blob animation-delay-2000 mix-blend-multiply filter blur-xl"></div>

      <div className="relative bg-white max-w-4xl w-full rounded-3xl shadow-xl p-6 sm:p-12 md:p-16 animate-fadeIn z-10">
        {/* Decorative top icon */}
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-800 mb-8 tracking-wide drop-shadow-sm">
          Learning Management System
        </h1>

        <div className="space-y-8 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.11 6.085c-1.758 1.26-4.76 3.046-6.27 3.046-1.51 0-4.513-1.787-6.27-3.047a12.083 12.083 0 01.11-6.084L12 14z" />
            </svg>
            Our <span className="font-semibold text-indigo-600">Learning Management System (LMS)</span> is designed to provide a seamless learning experience for both students and educators. With a user-friendly interface and powerful features, our platform empowers users to create, manage, and deliver engaging educational content.
          </p>

          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6" />
            </svg>
            Whether you are a teacher looking to create interactive courses or a student eager to learn new skills, our LMS has you covered. From quizzes and assignments to progress tracking and collaboration tools, we offer everything you need to succeed in your educational journey.
          </p>

          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6h13v6" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l-3 3-3-3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 3v2" />
            </svg>
            Our team is dedicated to continuously improving the platform, so you can expect regular updates and new features to enhance your learning experience. Join us today and embark on a journey of knowledge and discovery!
          </p>
        </div>
      </div>

      {/* Custom animation styles */}
      <style>
        {`
          @keyframes fadeIn {
            from {opacity: 0; transform: translateY(10px);}
            to {opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
          @keyframes blob {
            0%, 100% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}
      </style>
    </div>
  );
};

export default AboutPage;
