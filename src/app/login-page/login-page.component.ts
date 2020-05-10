import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { UserInfo } from '../core/models';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  public username: string;
  public password: string;
  public userInfo: UserInfo;
  public authentification: boolean = false;

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.authService.userInfo$.subscribe((data: string) => {
      this.authentification = this.isAuthentificated();
    });
  }

  public loginUser(): UserInfo {
    const isLogged: UserInfo = this.authService.userLogin(this.username, this.password);
    if (isLogged) {
      this.userInfo = isLogged;
      this.authentification = this.authService.isAuthentificated();
    } else {
      return undefined;
    }
  }

  public isAuthentificated(): boolean {
    return this.authService.isAuthentificated();
  }
}
