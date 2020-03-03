import axios from 'axios';

const axiosWithAuth=()=>{
    const token =
    localStorage.getItem("token")
    return axios.create({
        baseURL: 'https://african-marketplace-2020.herokuapp.com/api',
        headers:{
            Authorization: token
        }
    })
} 
export default  axiosWithAuth