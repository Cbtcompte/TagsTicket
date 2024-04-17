import axios, { } from "axios";

const Axios = axios
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Axios.defaults.headers.common['Authorization'] = ''
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;application/json;multipart/form-data'

// Axios.interceptors.response.use(undefined, (error) => {
//     if(error.code == "ERR_BAD_RESPONSE"){
       
//     }
// })
// Axios.interceptors.request.use((config : InternalAxiosRequestConfig) => {console.log(config); return config})

export {Axios};