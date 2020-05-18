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

  public userLogin(sentLogin: string, sentPassword: string): boolean {
    const {
      login,
      password,
      firstName,
      lastName,
      token
    } = this.userInfo;

    if (sentLogin === login && sentPassword === password && token) {
      localStorage.setItem('userData', JSON.stringify({ firstName, lastName, token }));
    }
    return this.isAuthentificated();
  }

  public userLogout(): boolean {
    localStorage.removeItem('userData');
    return this.isAuthentificated();
  }

  public isAuthentificated(): boolean {
    const userDataFromLS: UserInfo = JSON.parse(localStorage.getItem('userData'));
    return userDataFromLS && !!userDataFromLS.token;
  }
}
