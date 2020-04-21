import { HttpClient } from './http.service';
import { of, Observable, from, config } from 'rxjs';
import { pluck } from 'rxjs/operators';
import md5 from 'md5';
import { ProductLine } from './interface/info';

const Prefix = 'api/sensego/console/v1.0/';

export class ApiService {
  private http: any;

  constructor() {
    this.http = new HttpClient();
  }

  login(data: {
    user_name: string;
    pwd: string;
    scene: string;
  }): Observable<{
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

