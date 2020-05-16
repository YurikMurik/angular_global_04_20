import { Injectable, OnInit } from '@angular/core';
import { fakeUserInfo } from '../mocks/mocked-user';
import { UserInfo } from '../models';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userInfo: UserInfo;
  private userInfoSource: Subject<boolean> = new Subject();

  constructor() {
    this.userInfo = fakeUserInfo;
  }

  public refreshData(data: boolean): void {
    this.userInfoSource.next(data);
  }

  public getRefreshedData(): Observable<boolean> {
    return this.userInfoSource.asObservable();
  }

  public getUserInfo(): UserInfo {
    return this.userInfo;
  }

  public userLogin(sentLogin: string, sentPassword: string): Observable<UserInfo> {
    const {
      login,
      password,
      firstName,
      lastName,
      token
    } = this.userInfo;

    if (sentLogin === login && sentPassword === password) {
      localStorage.setItem('userData', JSON.stringify({ firstName, lastName, token }));
      return of(this.userInfo);
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
