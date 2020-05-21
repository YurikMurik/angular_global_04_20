import { Injectable } from '@angular/core';
import { UserInfo } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userUrl: string = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,
  ) { }

  public getUserInfo(): Observable<UserInfo> {
    return this.http.get<UserInfo>(this.userUrl);
  }

  public userLogin(sentLogin: string, sentPassword: string): Observable<boolean> {
    return this.http.get<UserInfo>(this.userUrl, { headers: { SkipInterceptor: 'true' }})
      .pipe(
        map(data => {
          const {
            login,
            password,
            firstName,
            lastName,
            token
          } = data[0];
          if ((sentLogin === login) && (sentPassword === password) && token) {
            localStorage.setItem('userData', JSON.stringify({ firstName, lastName, token }));
          }
          return this.isAuthentificated();
        })
      );
  }

  public userLogout(): boolean {
    localStorage.removeItem('userData');
    return this.isAuthentificated();
  }

  public isAuthentificated(): boolean {
    const userDataFromLS: UserInfo = JSON.parse(localStorage.getItem('userData'));
    return userDataFromLS && !!userDataFromLS.token;
  }

  public getToken(): string {
    const userDataFromLS: UserInfo = JSON.parse(localStorage.getItem('userData'));
    return userDataFromLS.token;
  }
}
