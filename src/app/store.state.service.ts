import store from 'js-cookie';
import md5 from 'md5';

const tokenKey = md5('Senserealty-Token');

export class StoreStateService {
  getToken() {
    return store.get(tokenKey);
  }
  setToken(token: string) {
    store.set(tokenKey, token);
  }
}
