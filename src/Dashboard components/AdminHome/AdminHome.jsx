import useAuth from "../../Hooks/useAuth";



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
        </div>
    );
};

export default AdminHome;