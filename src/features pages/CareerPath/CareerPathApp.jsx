import  { useState, useEffect } from 'react';
import CareerPath from './CareerPath';


function CareerPathApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/carrarpath.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Career Paths</h1>
      {data && data.career_paths.map((career, index) => (
        <CareerPath
          key={index}
          title={career.title}
          ways={career.ways}
          responsibilities={career.responsibilities}
          requirements={career.requirements}
          relatedCompanies={career.related_companies}
          salaryRange={career.salary_range_bangladesh}
        />
      ))}
    </div>
  );
}

export default CareerPathApp;
