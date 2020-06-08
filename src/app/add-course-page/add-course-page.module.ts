import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page.component';
import { CustomMaterialModule } from '../core/modules/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDurationFieldComponent } from '../shared/custom-form-field-control/custom-duration-field/custom-duration-field.component';
import { TransformMinutesToHoursModule } from '../core/pipes/transform-minutes/transform-minutes.module';
import { CustomAuthorsInputComponent } from '../shared/custom-form-field-control/custom-authors-input/custom-authors-input.component';
import { CustomCreatedAtDateFieldComponent } from '../shared/custom-form-field-control/custom-created-at-date-field/custom-created-at-date-field.component';

@NgModule({
  declarations: [
    AddCoursePageComponent,
    CustomDurationFieldComponent,
    CustomCreatedAtDateFieldComponent,
    CustomAuthorsInputComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    TransformMinutesToHoursModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  exports: [ AddCoursePageComponent ]
})
export class AddCoursePageModule { }
