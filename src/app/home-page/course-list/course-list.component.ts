import { Component, Input } from '@angular/core';
import { CourseItemInfo } from 'src/app/core/models';
import { HomePageService } from '../../core/services/home-page.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.less']
})
export class CourseListComponent {
  @Input() public courses: CourseItemInfo[] = [];

  constructor (private homePageService: HomePageService) {}

  public onDeleteCourse(id: number): void {
    this.homePageService.deleteCourseById(id)
    .pipe(switchMap(() => this.homePageService.getCourses()))
    .subscribe(data => this.homePageService.refreshData(data));
  }
}
