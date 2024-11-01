import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interfaces/common';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiKey: string = "aec1e87097bbff8a9db46a54a25419113656e3ac";

  constructor(
    private _httpClient: HttpClient
  ) { }

  // login user
  loginUser = (userLogin: Login) => {
    const headers = new HttpHeaders({
      "Authorization": this.apiKey,
      "Content-Type": "application/json"
    });
    return this._httpClient.post("https://ap.greatfuturetechno.com/login/", userLogin, { headers });
  }
}
