import httpInterceptors from './http-interceptors.service';
import { AxiosInstance } from 'axios';
import { Observables } from 'vue-rx';
import { Observable } from 'rxjs';
import { ProductLine } from './interface/info';
import md5 from 'md5';

const Prefix = 'api/sensego/console/v1.0/';

export class ApiService {
  private http: AxiosInstance;

  constructor() {
    this.http = httpInterceptors;
  }

  login(data: {
    user_name: string;
    pwd: string;
    scene: string;
  }): Promise<{
    type: string;
    name: string;
    user_id: string;
    phone: string;
    company_id: string;
    role: number;
    node_id: string;
    email: string;
    token: string;
    ak: string;
    company_name: string;
    error_code: number;
    node_name: string;
    productline_name: string[];
    productline: number[];
  }> {
    return this.http.post(Prefix + 'login', { ...data, pwd: md5(data.pwd) });
  }

  getProductLine(): Promise<{
    list: ProductLine[]
  }> {
    return this.http.get(Prefix + 'getproductline');
  }


}

