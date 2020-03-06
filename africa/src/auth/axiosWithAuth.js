import axios from './node_modules/axios';

export default function axiosWithAuth() {
    const token =localStorage.getItem("token")
    const axiosInstance = axios.create({
        // baseURL: 'https://african-marketplace-2020.herokuapp.com/api',
        baseUrl: ' https://lbs-african-marketplace.herokuapp.com',
        headers:{
            Authorization: token
        }
    });
return axiosInstance
}