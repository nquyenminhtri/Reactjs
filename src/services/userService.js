import axios from "../axios";
const handleLoginApi = (username, password) =>{
    return axios.post('/api/login',{username,password});
}

const getAllUsers = (inputId)=>{
    return axios.get(`/api/get-all-users?id=${inputId}`)
}
export { handleLoginApi, getAllUsers}