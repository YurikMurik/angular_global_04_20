import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { UserInfo } from '../core/models';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  public username: string;
  public password: string;
  public userInfo: UserInfo;
  public authentification: boolean;

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.authService.isAuthentificated().subscribe((data: boolean) => {
      this.authentification = data;
    });

    this.authService.getRefreshedData().subscribe(
      data => this.authentification = data
    );
  }

  public loginUser(): void {
    const isLogged: Observable<UserInfo> = this.authService.userLogin(this.username, this.password);
    if (isLogged) {
      isLogged
      .pipe(switchMap(() => this.authService.isAuthentificated()))
      .subscribe(data => this.authService.refreshData(data));
    } else {
      return undefined;
    }
  }
}
