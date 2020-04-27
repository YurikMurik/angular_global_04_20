import { Component, Input } from '@angular/core';
import { CourseItemInfo } from 'src/app/core/models';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.less']
})
export class CourseListComponent {

  @Input() public courses: CourseItemInfo[] = [];
}
