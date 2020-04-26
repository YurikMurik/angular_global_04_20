import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { SearchComponent } from './toolbox/search/search.component';
import { AddCourseComponent } from './toolbox/add-course/add-course.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CourseListComponent,
    ToolboxComponent,
    SearchComponent,
    AddCourseComponent
  ],
  exports: [HomePageComponent],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
