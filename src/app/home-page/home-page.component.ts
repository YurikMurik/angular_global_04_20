import { Component, OnInit } from '@angular/core';
import { CourseItemInfo } from '../core/models';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  public courses: CourseItemInfo[];

  constructor(
    private homePageService: HomePageService,
  ) { }

  public ngOnInit(): void {
    this.getCourses();
  }

  public getCourses(): void {
    this.courses = this.homePageService.getCourses();
  }
}
