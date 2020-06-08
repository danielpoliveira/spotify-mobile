import axios        from 'axios';
import { isLogged } from './auth';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  timeout: 10000,
});

api.interceptors.request.use(
  async config => {
    return await isLogged()
    .then(data => {
      if(data)
        config.headers.Authorization = `Bearer ${data}`;
        
      return Promise.resolve(config);  
    })
    .catch(err => {
      console.log('error: => ', err);
      return Promise.resolve(config);
    });
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default api;