import { Component } from '@angular/core';
import { CourseItemInfo } from '../core/models';
import { HomePageService } from '../core/services/home-page.service';
import { UpdateCoursesMessageService } from '../core/services/update-courses.service';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
})
export class HomePageComponent {

  public subscription: Subscription;
  public courses: Observable<CourseItemInfo[]>;

  constructor (
    private homePageService: HomePageService,
    private updateCoursesMessageService: UpdateCoursesMessageService
  ) {
    this.courses = this.homePageService.getCourses();
  }

  public ngOnInit(): void {
    this.subscription = this.updateCoursesMessageService.coursesReceivedNotify.subscribe(
      data => this.courses = of(data)
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
