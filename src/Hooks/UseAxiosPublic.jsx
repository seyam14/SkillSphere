import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://skillsphere-server-side.vercel.app"
    
})
const UseAxiosPublic = () => {
    return axiosPublic
    
};

export default UseAxiosPublic;