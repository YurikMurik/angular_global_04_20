import { Injectable } from '@angular/core';
import { fakeUserInfo } from '../mocks/mocked-user';
import { UserInfo } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userInfo: UserInfo;

  constructor() {
    this.userInfo = fakeUserInfo;
  }

  public getUserInfo(): UserInfo {
    return this.userInfo;
  }

  public userLogin(sentLogin: string, sentPassword: string): UserInfo {
    const {
      login,
      password,
      firstName,
      lastName,
      token
    } = this.userInfo;

    if (sentLogin === login && sentPassword === password) {
      localStorage.setItem('userData', JSON.stringify({ firstName, lastName, token }));
      return this.userInfo;
    }
  }

  public userLogout(): Observable<boolean> {
    localStorage.removeItem('userData');
    return this.isAuthentificated();
  }

  public isAuthentificated(): Observable<boolean> {
    const userDataFromLS: UserInfo = JSON.parse(localStorage.getItem('userData'));
    return of(userDataFromLS && !!userDataFromLS.token);
  }
}
