import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthResponse } from '../models/auth-response.model';
declare const FB: any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  loginFacebook(): Observable<any> {
    return Observable.create((observer) => {
      FB.login((response: any) => {
        const longLivedToken = this.getLongLiveToken(response.authResponse.accessToken);
        const authResponse = longLivedToken;
        this.setLocalStorage(authResponse);
        observer.next(authResponse);
      });
    });
  }

  isLoggedIn(): AuthResponse {
    let authResponse: AuthResponse;
    return authResponse = JSON.parse(localStorage.getItem('auth-response'));
  }

  setLocalStorage(authResponse) {
    localStorage.setItem('usertoken', JSON.stringify(authResponse));
  }

  getLongLiveToken(accessToken: string) {
    console.log('accessToken', accessToken);

    // tslint:disable-next-line: max-line-length
    const urlExchangeLongLivedToken = `https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=933021606869470&client_secret=b086a2a1ac36c03154cc48354575bdaa&fb_exchange_token=${accessToken}`;

    this.http.get(urlExchangeLongLivedToken).pipe()
      .subscribe(longLivedToken => longLivedToken);
  }

  logOutFacebook(): Observable<any> {
    return Observable.create((observer) => {
      FB.logout((response: any) => {
        observer.next(response);
      });
    });
  }
}
