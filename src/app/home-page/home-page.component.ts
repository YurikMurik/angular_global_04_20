import { Component } from '@angular/core';
import { CourseItemInfo } from '../core/models';
import { HomePageService } from '../core/services/home-page.service';
import { UpdateCoursesMessageService } from '../core/services/update-courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
})
export class HomePageComponent {

  public courses: CourseItemInfo[];
  public courses$: Observable<CourseItemInfo[]>;

  constructor (
    private homePageService: HomePageService,
    private updateCoursesMessageService: UpdateCoursesMessageService
  ) { }

  public ngOnInit(): void {
    this.homePageService.getCourses().subscribe(
      data => this.courses = data
    );
    this.updateCoursesMessageService.coursesReceivedNotify.subscribe(
      data => this.courses = data
    );
  }
}
