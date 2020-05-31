import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './root/app-routing.module';
import { AppComponent } from './root/app.component';
import { CoreModule } from './core/core.module';
import { LoginPageModule } from './login-page/login-page.module';
import { HomePageModule } from './home-page/home-page.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './core/modules/material.module';
import { AddCoursePageModule } from './add-course-page/add-course-page.module';
import { NotFoundPageModule } from './not-found-page/not-found-page.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
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
    LoginPageModule,
    HomePageModule,
    AddCoursePageModule,
    NotFoundPageModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
