import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent {
  @Input() public currentRouteUrl: string;
  public isAuthentificatedUser: boolean = false;

  constructor(private authService: AuthService) {}

  public checkingLoginRouter(): boolean {
    return this.currentRouteUrl !== '/login';
  }

  public userLogout(): void {
    this.authService.userLogout();
  }
}
