import axios from "../axios";
const handleLoginApi = (username, passWord) =>{
    return axios.post('/api/login',{username,passWord});
}

const getAllUsers = (inputId)=>{
    return axios.get(`/api/get-all-users?id=${inputId}`)
}
const createNewUserService = (data) =>{
    console.log('check data: ',data)
    return axios.post('/api/create-new-user',data);
}
const deleteUserService = (userId)=>{
    return axios.delete('/api/delete-user',{
        data:{
            id:userId
        }
    });
}
const updateUserService = (inputData)=>{
    return axios.put('/api/edit-user',inputData);
}
export { handleLoginApi, getAllUsers,createNewUserService,deleteUserService,updateUserService}