import store from 'js-cookie';
import md5 from 'md5';

const tokenKey = md5('Senserealty-Token');

export class StoreStateService {
  static getToken() {
    return store.get(tokenKey);
  }
  static removeToken() {
    return store.remove(tokenKey);
  }
  setToken(token: string) {
    return store.set(tokenKey, token);
  }

}
