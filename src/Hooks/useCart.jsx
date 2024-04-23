import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useCart = () => {

        const axiosSecure = useAxios();
        const { user} = useAuth();
       
        const {  refetch, data: cart = [] } = useQuery({
            queryKey: ['cart', user?.email],
            queryFn: async() => {
                const res = await axiosSecure.get(`/carts?email=${user.email}`);
                // console.log(res.data);
                return res.data;
            }
        })
        
        return [cart, refetch]
    };

export default useCart;