import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  public canActivate(): Observable<boolean> {
    return this.auth.isAuthentificated()
      .pipe(
        map(authState => {
          if (!authState) {
            this.router.navigate(['login']);
          }
          return !!authState;
        }),
        take(1)
      );
  }

  public resolve(): Observable<void> {
    return this.auth.isAuthentificated()
    .pipe(
      map(authState => {
        if (authState) {
          this.router.navigate(['']);
        }
      }),
      take(1)
    );
  }
}
