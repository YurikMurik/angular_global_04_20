import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { GetFormControls } from '../core/models';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent {
  public isAuth: boolean = false;
  public isAuthentificated: boolean;
  public loginFormGroup: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginFormGroup = fb.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]],
    });
  }

  get formControls(): GetFormControls {
    return this.loginFormGroup.controls;
  }

  public userLogin(): void {
    const { username, password} = this.loginFormGroup.value;
    this.authService.userLogin(username, password).subscribe(
      data => this.router.navigate(['courses'])
    );
  }
}
