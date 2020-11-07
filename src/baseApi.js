import axios from 'axios'

const baseApi = axios.create({
    withCredentials: false, // This is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});


baseApi.interceptors.request.use(function (config) {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        let token = localStorage.getItem('token')
        config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
});

export default baseApi;