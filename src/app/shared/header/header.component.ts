import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent {
  @Input() public currentRouteUrl: string;
  constructor(private authService: AuthService) {}

  public userLogout(): void {
    this.authService.userLogout();
  }
}
