import axios from 'axios';

const req = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 2500,
})

req.interceptors.response.use((response) =>{
  return response.data;
});

export const fetchHome = () => req.get('/home');
export const fetchUser = () => req.get('/user');
