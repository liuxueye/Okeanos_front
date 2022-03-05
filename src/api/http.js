import axios from 'axios';
const service = axios.create({
    baseURL: 'http://localhost:2663',
    timeout: 100000,
})

// request 拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error) 
        return Promise.reject(error)
    }
)
// response 拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)
export default service