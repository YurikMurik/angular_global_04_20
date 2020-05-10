import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {
  @Input() public currentRouteUrl: string;
  public authentification: boolean = false;

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.userInfo$.subscribe((data: string) => {
      this.authentification = this.isAuthentificated();
    });
  }

  public checkingLoginRouter(): boolean {
    return this.currentRouteUrl !== '/login';
  }

  public userLogout(): void {
    this.authService.userLogout();
  }

  public isAuthentificated(): boolean {
    return this.authService.isAuthentificated();
  }
}
