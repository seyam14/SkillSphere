import { useEffect, useState } from 'react';
import axios from 'axios';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Recommendations() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    axios.get('/CourseRecommendations.json')
      .then(response => {
        setCourses(response.data);
        setFilteredCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);
  const handleSearch = () => {
    const filtered = courses.filter(course =>
      course["Course Name"].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div className="container mx-auto">
       <Helmet>
        <title>LMS|Recommendations</title>
       </Helmet> 
      <SectionTitle  subHeading="Here Recommendations Courses" 
            heading="Recommendations"></SectionTitle>
      <div className="mb-4 pl-8">
      <Link to="/careerPathApp"> 
            <button className="btn btn-outline btn-accent">Career Path</button>
            </Link> 
        </div>      
      <div className="mb-4 pl-8">
        <input
          type="text"
          placeholder="Search courses..."
          className="px-4 py-2 border rounded-xl mr-2"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-xl"
          onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredCourses.map(course => (
          <div key={course["Course Name"]} className="bg-sky-300 shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{course["Course Name"]}</h2>
              <p className=" mb-4">{course["Course Description"].slice(0, 50)} ...more </p>
              <div className="flex justify-between items-center">
                <p className="text-sm ">Difficulty Level: {course["Difficulty Level"]}</p>
                <p className="text-sm ">Rating: {course["Course Rating"]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
