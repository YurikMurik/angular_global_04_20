import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from '../../course-page/course-page.component';

@NgModule({
  declarations: [CoursePageComponent],
  exports: [CoursePageComponent],
  imports: [CommonModule]
})
export class CoursePageModule { }
