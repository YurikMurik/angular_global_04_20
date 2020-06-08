import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../core/services/auth-guard.service';
import { HomePageComponent } from '../home-page/home-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { AddCoursePageComponent } from '../add-course-page/add-course-page.component';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'courses/new', component: AddCoursePageComponent, canActivate: [AuthGuard] },
  { path: 'courses/:courseId', component: AddCoursePageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent, resolve: [AuthGuard] },
  { path: '**', component: NotFoundPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
