import { Rxios } from './utils/rxios';
import { AuthInterceptor, ErrorHandleInterceptor } from './http-interceptors.service';

class HttpClient extends Rxios {
  private AuthInterceptor: any;
  private ErrorHandleInterceptor: any;

  constructor() {
    super({
      timeout: 3000,
    });
    this.AuthInterceptor = new AuthInterceptor();
    this.ErrorHandleInterceptor = new ErrorHandleInterceptor();
    super.registerRequestInterceptors(this.AuthInterceptor);
    super.registerResponseInterceptors(this.ErrorHandleInterceptor);
  }
}

export { HttpClient };
