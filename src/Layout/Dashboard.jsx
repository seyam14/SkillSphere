import { Helmet } from "react-helmet";
// import useAdmin from "../Hooks/useAdmin";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUsers } from "react-icons/fa";
import { SiCoursera, SiGoogleclassroom,SiWheniwork } from "react-icons/si";
import { RiUserSettingsFill } from "react-icons/ri";

const Dashboard = () => {

    // const [isAdmin] = useAdmin();
    // console.log(isAdmin);
    const isAdmin = true;

    return (
        <div className="flex">
     <Helmet>
        <title>LMS|Dashboard</title>
     </Helmet>
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-sky-400">
                <ul className="menu p-4">
                    {
                        isAdmin && 
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addcourse">
                                <SiCoursera/>
                                AddCourse</NavLink>
                            </li>

                        </>
                    }

                    {

                        isAdmin === false &&  
                        <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                    <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/activity">
                                    <SiWheniwork />
                                    Activity Log</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/settings">
                                    <RiUserSettingsFill />
                                    Profile Settings</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/classes">
                                    <SiGoogleclassroom />
                                    Classes</NavLink>
                                </li>
                        </>
                    }
                    
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <FaHome></FaHome>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};


export default Dashboard;