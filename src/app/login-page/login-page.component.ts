import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent {
  public isAuth: boolean = false;
  public username: string;
  public password: string;
  public isAuthentificated: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public loginUser(): void {
    this.authService.userLogin(this.username, this.password);
    this.router.navigate(['courses']);
  }
}
