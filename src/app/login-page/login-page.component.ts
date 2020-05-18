import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  public username: string;
  public password: string;
  public isAuthentificated: boolean;

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.isAuthentificated = this.authService.isAuthentificated();
  }

  public loginUser(): void {
    const isLogged: boolean = this.authService.userLogin(this.username, this.password);
    this.isAuthentificated = isLogged;
  }
}
