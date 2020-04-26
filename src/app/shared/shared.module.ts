import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderLoginComponent } from './header/header-login/header-login.component';
import { HeaderLogoComponent } from './header/header-logo/header-logo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderLoginComponent,
    HeaderLogoComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
