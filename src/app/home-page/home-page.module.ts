import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { SearchComponent } from './toolbox/search/search.component';
import { AddCourseComponent } from './toolbox/add-course/add-course.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseItemComponent } from './course-list/course-item/course-item.component';
import { TransformMinutesToHoursPipe } from '../core/pipes/transform-minutes.pipe';

@NgModule({
  declarations: [
    HomePageComponent,
    CourseListComponent,
    ToolboxComponent,
    SearchComponent,
    AddCourseComponent,
    CourseItemComponent,
    TransformMinutesToHoursPipe
  ],
  exports: [HomePageComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class HomePageModule { }
