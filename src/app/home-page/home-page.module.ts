import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SearchComponent } from './search/search.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseItemComponent } from './course-list/course-item/course-item.component';
import { ChangeBorderColorDirective } from '../core/directives/change-border-color.directive';
import { OrderByDateCreationPipe } from '../core/pipes/order-by-date-creation.pipe';
import { OrderByTitleNamePipe } from '../core/pipes/order-by-title-name.pipe';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { TransformMinutesToHoursModule } from '../core/pipes/transform-minutes/transform-minutes.module';

@NgModule({
  declarations: [
    HomePageComponent,
    CourseListComponent,
    SearchComponent,
    AddCourseComponent,
    CourseItemComponent,
    OrderByDateCreationPipe,
    OrderByTitleNamePipe,
    ChangeBorderColorDirective,
  ],
  exports: [HomePageComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TransformMinutesToHoursModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule
  ],
  providers: [
    DatePipe,
    OrderByTitleNamePipe
  ]
})
export class HomePageModule { }
