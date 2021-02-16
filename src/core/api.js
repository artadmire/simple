import axios from 'axios';

let pre = 'http://localhost:3000';

const req = axios.create({
  baseURL: `${pre}/api`,
  timeout: 2500,
})

req.interceptors.response.use((response) =>{
  return response.data;
});

export const fetchJavaScript = () => req.get('/javaScript');
export const fetchHtml = () => req.get('/html');
