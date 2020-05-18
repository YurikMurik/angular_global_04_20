import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { CustomMaterialModule } from '../core/modules/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    RouterModule
  ]
})
export class LoginPageModule { }
