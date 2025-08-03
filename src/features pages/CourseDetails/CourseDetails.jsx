import { useLoaderData, Link } from "react-router-dom";
import { motion } from "framer-motion";

const CourseDetails = () => {
  const details = useLoaderData();
  const { CourseTitle, Description, DeadLine, Price } = details;

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="my-12 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-6 md:p-10 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-2xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{CourseTitle}</h1>
          <p className="text-lg opacity-90">Deadline: {DeadLine}</p>
          <p className="text-xl font-semibold mt-3">Price: ${Price}</p>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">
          {/* Left Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Description
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {Description}
            </p>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
              Terms and Rules
            </h2>
            <ul className="space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300">
              {[
                "You must pay the full course fee before the start date.",
                "Attendance is mandatory for all scheduled sessions.",
                "Participate actively in discussions and group activities.",
                "Respect the opinions and contributions of other students.",
                "Maintain academic integrity and avoid plagiarism.",
                "Seek help from instructors or peers if you encounter difficulties.",
                "Follow all instructions provided by the course instructors.",
              ].map((rule, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: "#4f46e5" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-pointer"
                >
                  {rule}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Back to Courses Button at Bottom */}
        <div className="flex justify-center pb-8">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
          >
            ← Back to Courses
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseDetails;
