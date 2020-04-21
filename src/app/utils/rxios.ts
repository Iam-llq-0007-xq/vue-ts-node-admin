// import { axios } from './http-interceptor.service';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

interface RxiosRequestConfig extends AxiosRequestConfig {
  localCache?: boolean;
}

interface RxiosResponseConfig extends AxiosResponse {
  cache?: any;
}

interface InterceptorsManager<V> {
  onFulfilled?: (value: V) => V | Promise<V>;
  onRejected?: (error: any) => any;
}

class Rxios {
  // tslint:disable-next-line:variable-name
  private _httpClient: AxiosInstance;

  constructor(private options: RxiosRequestConfig = {}) {
    this._httpClient = axios.create(options);
  }

  public registerRequestInterceptors(interceptor: InterceptorsManager<RxiosRequestConfig>): number {
    return this._httpClient.interceptors.request.use(interceptor.onFulfilled, interceptor.onRejected);
  }

  public registerResponseInterceptors(interceptor: InterceptorsManager<AxiosResponse>): number {
    return this._httpClient.interceptors.response.use(interceptor.onFulfilled, interceptor.onRejected);
  }

  // public registerRequestInterceptors<V = RxiosRequestConfig>(
  //   onFulfilled?: (value: RxiosConfig) => V | Promise<V>,
  //   onRejected?: (error: any) => any,
  // ): number {
  //   return this._httpClient.interceptors.request.use(onFulfilled, onRejected);
  // }

  // Fixed onFulfilled
  // public registerResponseInterceptors(
  //   onFulfilled?: (value: any) => any | Promise<any>,
  //   onRejected?: (error: any) => any,
  // ): number {
  //   return this._httpClient.interceptors.response.use(onFulfilled, onRejected);
  // }

  public get<T>(url: string, queryParams?: object) {
    return this._makeRequest<T>('GET', url, queryParams);
  }
  public post<T>(url: string, body: object, queryParams?: object) {
    return this._makeRequest<T>('POST', url, queryParams, body);
  }
  public put<T>(url: string, body: object, queryParams?: object) {
    return this._makeRequest<T>('PUT', url, queryParams, body);
  }
  public patch<T>(url: string, body: object, queryParams?: object) {
    return this._makeRequest<T>('PATCH', url, queryParams, body);
  }
  public delete<T>(url: string, queryParams?: object) {
    return this._makeRequest<T>('DELETE', url, queryParams);
  }

  private _makeRequest<T>(method: string, url: string, queryParams?: object, body?: object) {
    let request: AxiosPromise<T>;
    switch (method) {
      case 'GET':
        request = this._httpClient.get<T>(url, { params: queryParams });
        break;
      case 'POST':
        request = this._httpClient.post<T>(url, body, { params: queryParams });
        break;
      case 'PUT':
        request = this._httpClient.put<T>(url, body, { params: queryParams });
        break;
      case 'PATCH':
        request = this._httpClient.patch<T>(url, body, { params: queryParams });
        break;
      case 'DELETE':
        request = this._httpClient.delete<T>(url, { params: queryParams });
        break;

      default:
        throw new Error('Method not supported');
    }

    return new Observable<T>((subscribe) => {
      request
        .then((response: any) => {
          subscribe.next(response.data);
          subscribe.complete();
        })
        .catch((error: Error) => {
          subscribe.error(error);
          subscribe.complete();
        });
    });
  }
}

export {
  Rxios,
  RxiosRequestConfig,
  RxiosResponseConfig,
  InterceptorsManager,
};
