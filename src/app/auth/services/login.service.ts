import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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
        this.getLongLiveToken(response.authResponse.accessToken).pipe()
          .subscribe(longLiveToken => {
            this.setLocalStorage(longLiveToken);
            observer.next(longLiveToken);
          });
      });
    });
  }

  setLocalStorage(authResponse) {
    localStorage.setItem('GPLoginUser', JSON.stringify(authResponse));
  }

  getLongLiveToken(accessToken: string): Observable<any> {
    // tslint:disable-next-line: max-line-length
    const urlExchangeLongLivedToken = `https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=933021606869470&client_secret=b086a2a1ac36c03154cc48354575bdaa&fb_exchange_token=${accessToken}`;

    return this.http.get(urlExchangeLongLivedToken);
  }

  logOutFacebook(): Observable<any> {
    return Observable.create((observer) => {
      FB.logout((response: any) => {
        observer.next(response);
      });
    });
  }
}
