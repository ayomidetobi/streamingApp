import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://51.20.10.133:8000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
