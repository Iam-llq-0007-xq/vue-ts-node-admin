import { HttpClient } from './http.service';
import { of, Observable, from, config } from 'rxjs';
import { pluck } from 'rxjs/operators';
import md5 from 'md5';

const Prefix = 'api/v1.0/';
const ServerPrefix = 'auth/v1.0/';

export class ApiService {
  private http: any;

  constructor() {
    this.http = new HttpClient();
  }

  login(data: {
    user_name: string;
    pwd: string;
  }): Observable<{
    name: string;
    role: number;
    token: string;
    error_code: number;
  }> {
    return this.http.post(ServerPrefix + 'login', { ...data, pwd: md5(data.pwd) }).pipe(pluck('data'));
  }

}

