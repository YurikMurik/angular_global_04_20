import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

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
    private router: Router,
  ) { }

  public userLogin(): void {
    this.authService.userLogin(this.username, this.password).subscribe(
      data => this.router.navigate(['courses'])
    );
  }
}
