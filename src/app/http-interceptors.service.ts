import Axios, { AxiosStatic, AxiosResponse, AxiosInterceptorManager, AxiosInstance } from 'axios';
import { StoreStateService } from './store.state.service';
import VueRx from 'vue-rx';
import { Observable } from 'rxjs';

const service = Axios.create({
  baseURL: '/',
  timeout: 3000,
});

service.interceptors.request.use(
  (config) => {
    console.log('request ~>', config.url, config);
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
  (response) => {
    console.log('response ~>', response);
    const res = response.data;
    const { error_code, message = '' } = res;

    if (error_code !== 0) {
      // coding...

      return Promise.reject(new Error(message || 'Error'));
    }

    return res;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default service;
