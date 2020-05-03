import { IconDefinition, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Component } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent {
  public addCourseIcon: IconDefinition = faPlus;
}
