import img1 from '../../assets/images/Cyber security roadmap.jpg';
import img2 from '../../assets/images/Python roadmap.png';
import img3 from '../../assets/images/React roadmap.png';
import img4 from '../../assets/images/MERN ROADMAP.jpeg';
import SectionTitle from '../../SectionTitle/SectionTitle';

const CarrerRoadmap = () => {
  const images = [img1, img2, img3, img4]; 
  return (
    <div>
       <SectionTitle  subHeading="Here Carrer Roadmap " 
            heading=" Set your Carrer"></SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 m-2">     
      {images.map((image, index) => (
        <div key={index} className="flex justify-center items-center">
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="max-w-full h-auto"
            style={{ maxHeight: '450px', width: '100%' }}
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default CarrerRoadmap;

