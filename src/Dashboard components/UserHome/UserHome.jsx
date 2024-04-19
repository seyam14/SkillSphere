import useAuth from "../../Hooks/useAuth";
import img from '../../assets/images/welcome.png';

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
               <h2 className="text-3xl">
                <span>Dear,User</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <br />
             <p className="text-xl text-gray-500">Check your  progress </p> 
            <img
            src={img}
            alt=''
            className="max-w-full h-auto border shadow-xl "
            style={{ maxHeight: '450px', width: '100%' }}
          />
        </div>
    );
};

export default UserHome;