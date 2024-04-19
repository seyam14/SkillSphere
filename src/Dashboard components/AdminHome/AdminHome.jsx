import useAuth from "../../Hooks/useAuth";
import img from '../../assets/images/Admin.jpg';


const AdminHome = () => {
    
    const { user } = useAuth();

    return (
        <div>
                 <h2 className="text-3xl">
                <span >Hello, Welcome back </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <br />
             <p className="text-xl text-gray-500">Maintain your site </p> 
             <img
            src={img}
            alt=''
            className="max-w-full h-auto border shadow-xl "
            style={{ maxHeight: '450px', width: '100%' }}
          />
        </div>
    );
};

export default AdminHome;