import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiousPublic = () => {
    return axiosPublic;
};

export default useAxiousPublic;