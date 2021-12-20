import axios from 'axios';

const axiosInstance = axios.create({
    //baseURL: ``,
    baseURL: process.env.NEXT_PUBLIC_URL,
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    timeout: 0, // default is `0` (no timeout)
    withCredentials: false,
    responseType: 'json',
});

export default axiosInstance;