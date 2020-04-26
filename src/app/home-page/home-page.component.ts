import { Component } from '@angular/core';
import { fakeVideoList } from '../core/mocks/mocked-data';
import { CourseItemInfo } from '../core/models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent {

  public courses: CourseItemInfo[] = fakeVideoList;
}
