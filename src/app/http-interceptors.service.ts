import axios, { AxiosResponse } from 'axios';
import { getToken } from './cookie.state';
import VueRx, { Observables } from 'vue-rx';
import { Observable } from 'rxjs';

const service = axios.create({
  baseURL: '/',
  timeout: 3000,
});

service.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.token = token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse<Observables>) => {
    // const res = response.data;
    // const { error_code, message = '' } = res;

    // if (error_code !== 0) {
    //   // coding...

    //   return Promise.reject(new Error(message || 'Error'));
    // }

    console.log(response);

    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default service;
