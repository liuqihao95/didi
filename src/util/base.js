import axios from 'axios'

var instance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 10000,
    withCredentials: true
});
export default instance;