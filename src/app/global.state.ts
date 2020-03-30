import cookie from 'js-cookie';
import md5 from 'md5';

const tokenKey = md5('Senserealty-Token');

export const setToken = (token: string) => cookie.set(tokenKey, token);
export const getToken = () => cookie.get(tokenKey);
