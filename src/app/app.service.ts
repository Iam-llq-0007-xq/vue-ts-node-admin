import httpInterceptors from './http-interceptors.service';
import { AxiosInstance } from 'axios';
import { Observable } from 'rxjs';

export default class ApiService {
  http: AxiosInstance;
  constructor(http: AxiosInstance) {
    this.http = httpInterceptors;
  }

  login(data = {}): Observable<{
    user_name: string;
    password: string;
  }> {
    return this.http.post('/api/login', data);
  }
}

