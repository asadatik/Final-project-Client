import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-server-alpha.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;