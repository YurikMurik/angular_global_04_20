import { Component } from '@angular/core';
import { IconDefinition, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.less']
})
export class HeaderLoginComponent {
  public faUserIcon: IconDefinition = faUser;
  public faUserLogout: IconDefinition = faArrowRight;
}
