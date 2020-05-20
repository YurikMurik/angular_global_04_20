import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { CreateBreadcrumbStringPipe } from '../core/pipes/createBreadcrumbString.pipe';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    CreateBreadcrumbStringPipe
  ],
  imports: [ CommonModule ],
  exports: [ BreadcrumbComponent ],
  providers: [ CreateBreadcrumbStringPipe ]
})
export class BreadcrumbModule { }
