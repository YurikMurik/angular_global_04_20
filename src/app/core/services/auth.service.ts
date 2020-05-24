import { Injectable } from '@angular/core';
import { UserInfo } from '../models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { LoadingBlockService } from './loading-block.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userUrl: string = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,
    private loadingBlockService: LoadingBlockService
  ) { }

  public getUserInfo(): Observable<UserInfo> {
    this.loadingBlockService.updateLoadingBlockState('start');
    return this.http.get<UserInfo>(this.userUrl)
      .pipe(
        tap(() => this.loadingBlockService.updateLoadingBlockState('finish'))
      );
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
          this.loadingBlockService.updateLoadingBlockState('start');
          if ((sentLogin === login) && (sentPassword === password) && token) {
            localStorage.setItem('userData', JSON.stringify({ firstName, lastName, token }));
          }
        }),
        switchMap(() => {
          return this.isAuthentificated()
            .pipe(
              map(auth => auth)
            );
        }),
        tap(() => this.loadingBlockService.updateLoadingBlockState('finish'))
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
