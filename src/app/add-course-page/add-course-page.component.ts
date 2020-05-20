import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageService } from '../core/services/home-page.service';
import { CourseItemInfo } from '../core/models';

const coursesURL: string = '/courses';
@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.less']
})
export class AddCoursePageComponent {

  public title: string;
  public description: string;
  public duration: number;
  public datapicker: Date;
  public authors: string;

  constructor (
    private router: Router,
    private homePageService: HomePageService
  ) { }

  public cancelClick(): void {
    this.router.navigate([coursesURL]);
  }

  public addNewCourse(): void {
    const sentDataCourse: CourseItemInfo[] = [{
      title: this.title,
      createdAtDate: this.datapicker,
      durationTime: this.duration,
      description: this.description,
      authors: this.authors
    }];

    this.homePageService.createCourse(sentDataCourse);
    this.router.navigate([coursesURL]);
  }
}
