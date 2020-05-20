import { Injectable } from '@angular/core';
import { fakeVideoList } from '../mocks/mocked-courses';
import { CourseItemInfo } from '../models';
import { OrderByTitleNamePipe } from '../pipes/order-by-title-name.pipe';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  private coursesList: CourseItemInfo[];

  constructor(private orderByTitleNamePipe: OrderByTitleNamePipe) {
    this.coursesList = fakeVideoList;
  }

  public getCourses(): Observable<CourseItemInfo[]> {
    return of(this.coursesList);
  }

  public sortListByName(): CourseItemInfo[] {
    return this.orderByTitleNamePipe.transform(this.coursesList);
  }

  public deleteCourseById(id: number): Observable<CourseItemInfo[]>  {
    const newArr: CourseItemInfo[] = this.coursesList.filter(item => item.id !== id);
    return of(this.coursesList = newArr);
  }

  public createCourse(object: CourseItemInfo[]): void {
    console.log(object);
  }

  public updateItem(id: number): CourseItemInfo[] {
    const courseList: CourseItemInfo[] = fakeVideoList;
    const foundCourse: CourseItemInfo = courseList.find(course => course.id === id);
    return [foundCourse];
  }
}
