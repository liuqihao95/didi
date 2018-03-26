import axios from 'axios'

var instance = axios.create({
    baseURL: 'http://didi.yaojunrong.com/api/',
    timeout: 10000,
    withCredentials: true
});
export default instance;