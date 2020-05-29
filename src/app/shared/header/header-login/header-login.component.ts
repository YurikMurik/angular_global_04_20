import { Component, OnInit } from '@angular/core';
import { IconDefinition, faUser, faArrowRight, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserInfo } from 'src/app/core/models/user-info.interface';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.less']
})
export class HeaderLoginComponent implements OnInit {
  public isAuthentificated: boolean;
  public userInfo: UserInfo;
  public faUserIcon: IconDefinition = faUser;
  public faUserLogout: IconDefinition = faArrowRight;
  public faUserLogin: IconDefinition = faAddressCard;

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.authService.isAuthentificated().subscribe(data => {
      this.isAuthentificated = data;
    });
    if (this.isAuthentificated) {
      this.authService.getUserInfo().subscribe(data => this.userInfo = data[0]);
    }
  }

  public userLogOut(): void {
    this.authService.userLogout();
  }
}
