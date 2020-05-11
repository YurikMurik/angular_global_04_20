import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { SearchComponent } from './toolbox/search/search.component';
import { AddCourseComponent } from './toolbox/add-course/add-course.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseItemComponent } from './course-list/course-item/course-item.component';
import { TransformMinutesToHoursPipe } from '../core/pipes/transform-minutes.pipe';
import { ChangeBorderColorDirective } from '../core/directives/change-border-color.directive';
import { OrderByDateCreationPipe } from '../core/pipes/orderByDateCreation.pipe';
import { OrderByTitleNamePipe } from '../core/pipes/orderByTitleName.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomePageComponent,
    CourseListComponent,
    ToolboxComponent,
    SearchComponent,
    AddCourseComponent,
    CourseItemComponent,
    TransformMinutesToHoursPipe,
    OrderByDateCreationPipe,
    OrderByTitleNamePipe,
    ChangeBorderColorDirective,
  ],
  exports: [HomePageComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    DatePipe,
    OrderByTitleNamePipe
  ]
})
export class HomePageModule { }
