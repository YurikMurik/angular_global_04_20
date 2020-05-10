import { Injectable, OnInit } from '@angular/core';
import { fakeUserInfo } from '../mocks/mocked-user';
import { UserInfo } from '../models';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userInfoSource: Subject<string> = new Subject();
  public userInfo$: Observable<string> = this._userInfoSource.asObservable();

  public getUserInfo(): UserInfo {
    const userInfo: UserInfo = fakeUserInfo;
    return userInfo;
  }

  public userLogin(sentLogin: string, sentPassword: string): UserInfo {
    const userInfo: UserInfo = this.getUserInfo();
    const {
      login,
      password,
      firstName,
      lastName,
      token
    } = userInfo;

    if (sentLogin === login && sentPassword === password) {
      localStorage.setItem('userData', JSON.stringify({ firstName, lastName, token }));
      this._userInfoSource.next('changed');
      return userInfo;
    }
  }

  public userLogout(): boolean {
    localStorage.removeItem('userData');
    this._userInfoSource.next('changed');
    return this.isAuthentificated();
  }

  public isAuthentificated(): boolean {
    const userDataFromLS: UserInfo = JSON.parse(localStorage.getItem('userData'));
    return userDataFromLS && !!userDataFromLS.token;
  }
}
