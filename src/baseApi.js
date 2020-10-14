import axios from 'axios'
import store from '@/store/index'

const baseApi = axios.create({
    withCredentials: false, // This is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});


baseApi.interceptors.request.use(function (config) {
    if (store.getters.isLoggedIn) {
        let token = store.getters.getToken
        config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
});

export default baseApi;