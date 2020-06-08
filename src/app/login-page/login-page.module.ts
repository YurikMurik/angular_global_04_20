import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { CustomMaterialModule } from '../core/modules/material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class LoginPageModule { }
