import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconDefinition, faEdit, faTrash, faClock, faCalendar, faStar } from '@fortawesome/free-solid-svg-icons';
import { CourseItemInfo } from 'src/app/core/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.less']
})
export class CourseItemComponent {
  @Input() public item: CourseItemInfo;
  @Input() public routerLink: Router;
  @Output() public onDeleteCourse: EventEmitter<number> = new EventEmitter();

  public editButtonIcon: IconDefinition = faEdit;
  public trashButtonIcon: IconDefinition = faTrash;
  public clockButtonIcon: IconDefinition = faClock;
  public calendarButtonIcon: IconDefinition = faCalendar;
  public topRatedIcon: IconDefinition = faStar;

  public onDeleteCourseEmit(id: number): void {
    return this.onDeleteCourse.emit(id);
  }
}
