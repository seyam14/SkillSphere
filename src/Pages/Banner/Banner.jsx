import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="mt-4">
        <div
          className="hero h-[75vh]"
          style={{ backgroundImage: "url(https://i.ibb.co/tsdk9zL/e-learning-management-system.jpg)" }}
        >
          <div className="hero-overlay bg-opacity-75"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="w-[600px">
              <h2 className="mb-5 text-2xl font-bold ">
              Learnify: Ignite, Illuminate, and Inspire
              </h2>
              <p>
              Embark on a journey of intellectual excellence with WisdomWave, where learning is not just a process but
                <br />
                <span className="font-semibold">
                a dynamic exploration of limitless possibilities.
                </span>
              </p>
              <div className="inline-flex mt-4">
                <div className="text-center">
                  <button  className="bg-red-500 text-white  py-2 px-4 hover:bg-blue-600">
                   <Link to='/courses'>Courses</Link> 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Banner;