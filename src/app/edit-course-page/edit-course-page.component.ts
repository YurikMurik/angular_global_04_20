import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../core/services/home-page.service';
import { ActivatedRoute } from '@angular/router';
import { CourseItemInfo } from '../core/models';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.less']
})
export class EditCoursePageComponent implements OnInit {
  public name: string;
  public editableCourse: CourseItemInfo[];
  public editableCourseData: CourseItemInfo;

  constructor(
    private homePageService: HomePageService,
    private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const courseId: number = +params.get('courseId');
      this.editCourseById(courseId);
    });
  }

  public editCourseById(id: number): void {
    this.editableCourse = this.homePageService.updateItem(id);
    this.editableCourseData = this.editableCourse[0];
  }
}
