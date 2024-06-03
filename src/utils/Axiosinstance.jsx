import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://videostream-gvi2.onrender.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
