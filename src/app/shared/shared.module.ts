import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderLoginComponent } from './header/header-login/header-login.component';
import { HeaderLogoComponent } from './header/header-logo/header-logo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CustomMaterialModule } from '../core/modules/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderLoginComponent,
    HeaderLogoComponent,
    ConfirmationDialogComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CustomMaterialModule,
    RouterModule
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
})
export class SharedModule { }
