import  { useState, useEffect } from 'react';
import axios from 'axios';
import SectionTitle from '../../SectionTitle/SectionTitle';

const SellCourseInfo = () => {
    const [sellCourseData, setSellCourseData] = useState([]);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        try {
            const response = await axios.get('http://localhost:5000/seller');
            setSellCourseData(response.data);
        } catch (error) {
            console.error('Error fetching seller course data:', error.message);
        }
    };

    return (
        <div>
            <SectionTitle subHeading="......." heading="Seller Course Information" />
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Skills</th>
                            <th>Price</th>
                            <th>PhoneNumber</th>
                            {/* <th>File</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(sellCourseData) && sellCourseData.map((course) => (
                            <tr key={course._id}>
                                <td>{course.title}</td>
                                <td>{course.description}</td>
                                <td>{course.skills}</td>
                                <td>{course.price}</td>
                                <td>{course.phoneNumber}</td>
                                {/* <td>{course.file.object}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SellCourseInfo;
