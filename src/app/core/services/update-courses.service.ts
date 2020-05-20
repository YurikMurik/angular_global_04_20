import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CourseItemInfo } from '../models';

@Injectable({
  providedIn: 'root'
})

export class UpdateCoursesMessageService {
  private notificationSource: Subject<CourseItemInfo[]> = new Subject();
  public coursesReceivedNotify: Observable<CourseItemInfo[]> = this.notificationSource.asObservable();

  public updateCourse(newArr: CourseItemInfo[]): void {
    this.notificationSource.next(newArr);
  }
}
