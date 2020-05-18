import { Component, OnInit } from '@angular/core';
import { CourseItemInfo } from '../core/models';
import { HomePageService } from '../core/services/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
})
export class HomePageComponent {

  public courses: CourseItemInfo[];

  constructor (private homePageService: HomePageService) { }

  public ngOnInit(): void {
    this.homePageService.getCourses().subscribe(
      data => this.courses = data
    );
  }
}
