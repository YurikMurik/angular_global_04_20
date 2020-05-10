import { Injectable } from '@angular/core';
import { fakeVideoList } from '../mocks/mocked-courses';
import { CourseItemInfo } from '../models';
import { OrderByTitleNamePipe } from '../pipes/orderByTitleName.pipe';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  private coursesList: CourseItemInfo[];
  private _courseListSource: Subject<CourseItemInfo[]> = new Subject();
  public courseList$: Observable<CourseItemInfo[]> = this._courseListSource.asObservable();

  constructor(private orderByTitleNamePipe: OrderByTitleNamePipe) {
    this.courseList$.subscribe((value) => {
      this.coursesList = value;
    });
  }

  public getCourses(): CourseItemInfo[] {
    const courseList: CourseItemInfo[] = fakeVideoList;
    this._courseListSource.next(courseList);
    return courseList;
  }

  public sortListByName(): void {
    this._courseListSource.next(
      this.orderByTitleNamePipe.transform(this.coursesList)
    );
  }

  public deleteCourseById(id: number): void {
    const filteredArray: CourseItemInfo[] = this.coursesList.filter(item => item.id !== id);
    this._courseListSource.next(filteredArray);
  }

  // TODO: it'll be implement in a next module
  /* public createCourse() {};
  public updateItem() {}; */
}
