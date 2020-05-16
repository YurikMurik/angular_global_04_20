import { Injectable } from '@angular/core';
import { fakeVideoList } from '../mocks/mocked-courses';
import { CourseItemInfo } from '../models';
import { OrderByTitleNamePipe } from '../pipes/orderByTitleName.pipe';
import { Subject, Observable, of, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  private coursesList: CourseItemInfo[];
  private courseListSource: Subject<CourseItemInfo[]> = new Subject();

  constructor(private orderByTitleNamePipe: OrderByTitleNamePipe) {
    this.coursesList = fakeVideoList;
  }

  public refreshData(data: CourseItemInfo[]): void {
    this.courseListSource.next(data);
  }

  public getRefreshedData(): Observable<CourseItemInfo[]> {
    return this.courseListSource.asObservable();
  }

  public getCourses(): Observable<CourseItemInfo[]> {
    return of(this.coursesList);
  }

  public sortListByName(): Observable<CourseItemInfo[]> {
    return of(this.orderByTitleNamePipe.transform(this.coursesList));
  }

  public deleteCourseById(id: number): Observable<CourseItemInfo[]> {
    const filteredList: CourseItemInfo[] = this.coursesList.filter(item => item.id !== id);
    return of(this.coursesList = filteredList);
  }
}
