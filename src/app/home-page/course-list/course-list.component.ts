import { Component, Input } from '@angular/core';
import { CourseItemInfo } from 'src/app/core/models';
import { HomePageService } from '../../core/services/home-page.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.less'],
})
export class CourseListComponent {
  @Input() public courses: CourseItemInfo[] = [];
  public coursesPage: number = 1;
  constructor (private homePageService: HomePageService) {}

  public onDeleteCourse(id: string): void {
    this.homePageService.deleteCourseById(id).subscribe(data => {
      this.courses = data;
    });
  }
}
