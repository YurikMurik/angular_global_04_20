import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserInfo } from '../models';
import { LoadingBlockService } from './loading-block.service';

const BASE_URL: string = 'http://localhost:3000/users';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient,
    private loadingBlockService: LoadingBlockService
  ) { }

  public getUserInfo(): Observable<UserInfo> {
    this.loadingBlockService.updateLoadingBlockState(true);
    return this.http.get<UserInfo>(BASE_URL)
      .pipe(
        tap(() => this.loadingBlockService.updateLoadingBlockState(false))
      );
  }

  public userLogin(sentLogin: string, sentPassword: string): Observable<void> {
    return this.http.get<UserInfo>(BASE_URL, { headers: { SkipInterceptor: 'true' }})
      .pipe(
        map(data => {
          const {
            login,
            password,
            firstName,
            lastName,
            token
          } = data[0];
          this.loadingBlockService.updateLoadingBlockState(true);
          if ((sentLogin === login) && (sentPassword === password) && token) {
            localStorage.setItem('userData', JSON.stringify({ firstName, lastName, token }));
          }
        }),
        tap(() => this.loadingBlockService.updateLoadingBlockState(false))
      );
  }

  public userLogout(): Observable<boolean> {
    localStorage.removeItem('userData');
    return this.isAuthentificated();
  }

  public isAuthentificated(): Observable<boolean> {
    const userDataFromLS: UserInfo = JSON.parse(localStorage.getItem('userData'));
    return of(userDataFromLS && !!userDataFromLS.token);
  }

  public getToken(): string {
    const userDataFromLS: UserInfo = JSON.parse(localStorage.getItem('userData'));
    return userDataFromLS.token;
  }
}
