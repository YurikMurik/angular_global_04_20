import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomMaterialModule } from '../core/modules/material.module';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderLoginComponent } from './header/header-login/header-login.component';
import { HeaderLogoComponent } from './header/header-logo/header-logo.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { LoadingBlockComponent } from './loading-block/loading-block.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderLoginComponent,
    HeaderLogoComponent,
    ConfirmationDialogComponent,
    LoadingBlockComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingBlockComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CustomMaterialModule,
    RouterModule,
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
})
export class SharedModule { }
