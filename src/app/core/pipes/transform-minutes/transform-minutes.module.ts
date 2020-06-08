import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformMinutesToHoursPipe } from './transform-minutes.pipe';

@NgModule({
  declarations: [ TransformMinutesToHoursPipe ],
  exports: [ TransformMinutesToHoursPipe ],
  imports: [ CommonModule ],
})
export class TransformMinutesToHoursModule { }
