import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page.component';
import { CustomMaterialModule } from '../core/modules/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AddCoursePageComponent ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
    FormsModule
  ],
  exports: [ AddCoursePageComponent ]
})
export class AddCoursePageModule { }
