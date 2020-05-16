import { Component, OnInit } from '@angular/core';
import { CourseItemInfo } from '../core/models';
import { HomePageService } from '../core/services/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent {

  public courses: CourseItemInfo[];

  constructor(private homePageService: HomePageService) {
    this.courses = [];
  }

  public ngOnInit(): void {
    this.homePageService.getCourses().subscribe(
      courseList => this.courses = courseList
    );
    this.homePageService.getRefreshedData().subscribe(
      courseList => this.courses = courseList
    );
  }

  /* public getCourses(): CourseItemInfo[] {
    return this.homePageService.getCourses();
  } */
}
