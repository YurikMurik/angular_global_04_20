import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseItemInfo, GetFormControls } from '../core/models';
import { HomePageService } from '../core/services/home-page.service';

const coursesURL: string = '/courses';
@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AddCoursePageComponent implements OnInit {
  public addNewCourseForm: FormGroup;
  public editableCourseItems: CourseItemInfo;
  public courseId: string;
  public pageTitle: string;

  constructor (
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private homePageService: HomePageService,
    private fb: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.addNewCourseForm = this.fb.group({
      title: [(this.editableCourseItems && this.editableCourseItems.title), [
        Validators.required,
        Validators.maxLength(50)
      ]],
      description: ['', [
        Validators.required,
        Validators.maxLength(500)
      ]],
      durationTime: ['', [Validators.required]],
      createdAtDate: ['', Validators.required],
      authors: [[]]
    });

    this.activatedRoute.paramMap.subscribe(params => {
      const courseId: string = params.get('courseId');
      this.courseId = courseId;
      courseId
        ? this.pageTitle = 'Edit course'
        : this.pageTitle = 'Add new course';
      if (courseId) {
        this.getCourseItemById(courseId);
      }
    });
  }

  public getCourseItemById(id: string): void {
    this.homePageService.getCourseById(id).subscribe(
      data => this.editCourse(data));
  }

  public editCourse(course: CourseItemInfo): void {
    this.addNewCourseForm.patchValue({
      title: course.title,
      description: course.description,
      durationTime: +course.durationTime,
      createdAtDate: course.createdAtDate,
      authors: course.authors
    });
  }

  public cancelClick(): void {
    this.router.navigate([coursesURL]);
  }

  public addNewCourse(): void {
    const sentDataCourse: CourseItemInfo = this.addNewCourseForm.value;
    let changeCourseItems: Observable<Object>;

    if (this.courseId) {
      changeCourseItems = this.homePageService.updateCourse(this.courseId, sentDataCourse);
    } else {
      changeCourseItems = this.homePageService.createCourse(sentDataCourse);
    }

    changeCourseItems.subscribe(
      data => {
        this.router.navigate([coursesURL]);
      }
    );
  }

  get formControls(): GetFormControls {
    return this.addNewCourseForm.controls;
  }
}
