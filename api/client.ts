import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(config => {
    /* add token*/
    return config;
})

export default API;
