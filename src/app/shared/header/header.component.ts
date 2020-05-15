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
    this.authService.isAuthentificated().subscribe((data: boolean) => {
      this.authentification = data;
    });
  }

  public ngDoCheck(): void {
    this.authService.isAuthentificated().subscribe((data: boolean) => {
      if (this.authentification !== data) {
        this.authentification = data;
      }
    });
  }

  public checkingLoginRouter(): boolean {
    return this.currentRouteUrl !== '/login';
  }

  public userLogout(): void {
    this.authService.userLogout();
  }
}
