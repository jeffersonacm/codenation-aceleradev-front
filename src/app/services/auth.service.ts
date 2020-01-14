import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as Variables from '../config/variables';
import { HttpParams, HttpClient } from '@angular/common/http';
import { UserLogin } from 'src/model/userLogin';
import { User } from 'src/model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${Variables.BASE_URL}` + '/users';
  }

  login(user: UserLogin): Observable <any> {
    const params = new HttpParams() 
      .set('username', user.email)
      .set('password', user.password)
      .set('grant_type', 'password');

    const options = {
        headers: Variables.HEADERS_COMMUN,
        params
    };

    return this.httpClient.post(Variables.URL_TOKEN, null, options);
  }

  register(user: User): Observable <any> {
    const options = {
      headers: Variables.HEADERS_COMMUN
    };

    return this.httpClient.post(Variables.REGISTER_URL, user, options);
  }
}