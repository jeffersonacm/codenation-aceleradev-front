import { HttpHeaders } from '@angular/common/http';

export const BASE_URL = 'http://localhost:8080/';
export const URL_TOKEN = BASE_URL + 'oauth/token';
export const REGISTER_URL = BASE_URL + 'users';
export const RECOVERY_REQUEST = BASE_URL + 'mailRecovery'
const headersToken = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
 });
export const OPTIONS_OBJECTO = { headers: headersToken };
export const HEADERS_LOGIN = new HttpHeaders({
 Authorization: 'Basic ' + btoa('codenation' + ':' + 'bancointer')
 });
export const HEADERS_REGISTER = new HttpHeaders({
 Authorization: 'Basic ' + btoa('codenation' + ':' + 'bancointer')
});
export const HEADERS_COMMUN = new HttpHeaders({
    Authorization: 'Basic ' + btoa('codenation' + ':' + 'bancointer')
});
