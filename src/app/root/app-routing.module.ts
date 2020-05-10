import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { CoursePageComponent } from '../course-page/course-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'courses/:courseId', component: CoursePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
