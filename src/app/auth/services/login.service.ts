import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

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

        this.setLocalStorage(response);
        observer.next(response.accessToken);

        // GET LONG LIVE TOKEN - UNCOMMENT WHEN DONE
        // this.getLongLiveToken(response.authResponse.accessToken).pipe()
        //   .subscribe(longLiveToken => {
        //     this.setLocalStorage(longLiveToken);
        //     observer.next(longLiveToken);
        //   });
      });
    });
  }

  setLocalStorage(authResponse) {
    localStorage.setItem('GPLoginUser', JSON.stringify(authResponse));
  }

  getLongLiveToken(accessToken: string): Observable<any> {
    const urlExchangeLongLivedToken =
      // tslint:disable-next-line: max-line-length
      `https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=933021606869470&client_secret=b086a2a1ac36c03154cc48354575bdaa&fb_exchange_token=${accessToken}`;

    return this.http.get(urlExchangeLongLivedToken);
  }

  logOut(): Observable<any> {
    return Observable.create((observer) => {
      FB.logout((response: any) => {
        localStorage.removeItem('GPLoginUser');
        observer.next(response);
      });
    });
  }

  checkLogin(): Observable<any> {
    return Observable.create(observer => {
      FB.getLoginStatus((res) => {
        if (res.status !== 'connected') {
          observer.next(false);
        }
        observer.next(true);
      });
    });
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${environment.mockServerURL}/users`);
  }

  testJsonServer() {
    this.http.get(`${environment.mockServerURL}/posts`).subscribe(d => console.log(d));
  }
}
