import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-restaurant-server-lyart.vercel.app'
})
const useAxiousPublic = () => {
    return axiosPublic;
};

export default useAxiousPublic;