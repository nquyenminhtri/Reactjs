import axios from "../axios";
const getAllProducts=(inputId)=>{
    return axios.get(`/api/get-all-products?id=${inputId}`)
}
export{getAllProducts}