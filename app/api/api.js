import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    timeout: 5000,
  });

//   if(storage.bearerToken) 
//     api.defaults.headers.common['Authorization'] = storage.bearerToken;

export default api;