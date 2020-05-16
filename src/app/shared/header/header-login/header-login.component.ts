import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition, faUser, faArrowRight, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserInfo } from 'src/app/core/models/user-info.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.less']
})
export class HeaderLoginComponent implements OnInit {
  @Input() public isAuthentificated: boolean;
  public userInfo: UserInfo;
  public faUserIcon: IconDefinition = faUser;
  public faUserLogout: IconDefinition = faArrowRight;
  public faUserLogin: IconDefinition = faAddressCard;

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    if (this.isAuthentificated) {
      this.userInfo = this.authService.getUserInfo();
    }
  }

  public userLogOut(): void {
    this.authService.userLogout()
    .pipe(switchMap(() => this.authService.isAuthentificated()))
    .subscribe(data => this.authService.refreshData(data));
  }
}
