import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../Hooks/useAxios';

const CourseDetails = () => {
  const { courseId } = useParams();
  const axiosSecure = useAxios();

  const { data: courseDetails } = useQuery({
    queryKey: ['courseDetails', courseId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment`);
      return res.data;
    },
    enabled: !!courseId, // Enable the query only when courseId is available
  });

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{courseDetails.CourseTitle}</h2>
      <p>Description: {courseDetails.Description}</p>
      <p>Deadline: {courseDetails.DeadLine}</p>
      <p>Price: ${courseDetails.Price}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default CourseDetails;
