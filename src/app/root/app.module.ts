import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '../core/core.module';
import { LoginPageModule } from '../login-page/login-page.module';
import { HomePageModule } from '../home-page/home-page.module';
import { SharedModule } from '../shared/shared.module';
import { CoursePageModule } from '../course-page/course-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from '../core/modules/material.module';
import { AddCoursePageModule } from '../add-course-page/add-course-page.module';
import { NotFoundPageModule } from '../not-found-page/not-found-page.module';
import { EditCoursePageModule } from '../edit-course-page/edit-course-page.module';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    CoursePageModule,
    LoginPageModule,
    HomePageModule,
    AddCoursePageModule,
    NotFoundPageModule,
    EditCoursePageModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
