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
  public editableCourse: CourseItemInfo;

  constructor(
    private homePageService: HomePageService,
    private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const courseId: string = params.get('courseId');
      this.editCourseById(courseId);
    });
  }

  public editCourseById(id: string): void {
    this.homePageService.updateItem(id).subscribe(data => {
      return this.editableCourse = data;
    });
  }
}
