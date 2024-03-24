import { useEffect, useState } from 'react';
import axios from 'axios';

function Recommendations() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    axios.get('../../../public/CourseRecommendations.json')
      .then(response => {
        setCourses(response.data);
        setFilteredCourses(response.data); // Initialize filtered courses with all courses
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  // Function to handle search
  const handleSearch = () => {
    const filtered = courses.filter(course =>
      course["Course Name"].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Course Recommendations</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search courses..."
          className="px-4 py-2 border rounded mr-2"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map(course => (
          <div key={course["Course Name"]} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{course["Course Name"]}</h2>
              <p className="text-gray-700 mb-4">{course["Course Description"].slice(0, 20)}...</p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Difficulty Level: {course["Difficulty Level"]}</p>
                <p className="text-sm text-gray-500">Rating: {course["Course Rating"]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
