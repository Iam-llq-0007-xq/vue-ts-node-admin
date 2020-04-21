// tslint:disable:max-classes-per-file
import { Rxios, RxiosRequestConfig, RxiosResponseConfig, InterceptorsManager } from './utils/rxios';
import { StoreStateService } from './store.state.service';

export class AuthInterceptor implements InterceptorsManager<RxiosRequestConfig> {
  public onFulfilled(config: any) {
    console.log('request ~> ', config.url, config);
    const token = StoreStateService.getToken();
    if (token) {
      config.headers.token = token;
    }
    return config;
  }
  public onRejected(error: any): any {
    return Promise.reject('AuthInterceptor ~>', error);
  }
}

export class ErrorHandleInterceptor implements InterceptorsManager<RxiosResponseConfig> {
  public onFulfilled(response: any) {
    console.log('response ~> ', response);
    const res = response.data;
    const { error_code, msg } = res;
    if (error_code !== 0) {
      // coding ...

      return Promise.reject(new Error(msg || 'Error'));
    }
    return response;
  }
  public onRejected(error: any): any {
    return Promise.reject('ErrorHandleInterceptor ~>', error);
  }
}
