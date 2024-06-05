import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const details = useLoaderData();
  const {
    CourseTitle,
    Description,
    DeadLine,
    Price
  } = details;
  console.log(details);

  return (
    <div className="card lg:card-side my-20 bg-base-100 shadow-xl m-5 p-5 border-2 border-gray-200 rounded-lg">
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title text-2xl font-bold  mb-4">Course Title: {CourseTitle}</h2>
        <p className="text-lg"><span className="font-semibold">Description:</span> {Description}</p>
        <p className="text-lg"><span className="font-semibold">Deadline:</span> {DeadLine}</p>
        <p className="text-lg"><span className="font-semibold">Price:</span> ${Price}</p>
      </div>
      <div className="card-body border-t-2 border-gray-300 mt-4 pt-4">
        <h2 className="font-semibold text-xl mb-2 text-secondary">Terms and Rules:</h2>
        <ul className="list-disc ml-5 space-y-2 text-base">
          <li className="hover:text-primary">You must pay the full course fee before the start date.</li>
          <li className="hover:text-primary">Attendance is mandatory for all scheduled sessions.</li>
          <li className="hover:text-primary">Participate actively in discussions and group activities.</li>
          <li className="hover:text-primary">Respect the opinions and contributions of other students.</li>
          <li className="hover:text-primary">Maintain academic integrity and avoid plagiarism.</li>
          <li className="hover:text-primary">Seek help from instructors or peers if you encounter difficulties.</li>
          <li className="hover:text-primary">Follow all instructions provided by the course instructors.</li>
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
