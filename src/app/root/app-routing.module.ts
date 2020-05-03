import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { CoursePageComponent } from '../course-page/course-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'course-page', component: CoursePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
