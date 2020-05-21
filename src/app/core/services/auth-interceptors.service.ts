import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpSentEvent } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CourseItemInfo, UserInfo } from '../models';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  public intercept(
    req: HttpRequest<CourseItemInfo | UserInfo>,
    next: HttpHandler
  ): Observable<HttpEvent<HttpSentEvent>> {
    if (req.headers.get('SkipInterceptor')) {
      return next.handle(req);
    }

    if (this.authService.isAuthentificated()) {
      const clonedRequest: HttpRequest<CourseItemInfo | UserInfo> = req.clone({
        headers: req.headers.set(
          'X-CustomAuthHeader',
          this.authService.getToken()
        )
      });
      return next.handle(clonedRequest);
    }
  }
}
