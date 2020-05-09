import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '../core/core.module';
import { LoginPageModule } from '../login-page/login-page.module';
import { HomePageModule } from '../home-page/home-page.module';
import { SharedModule } from '../shared/shared.module';
import { CoursePageModule } from '../course-page/course-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    CoursePageModule,
    LoginPageModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
