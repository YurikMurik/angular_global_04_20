import { Injectable } from '@angular/core';
import { fakeVideoList } from '../core/mocks/mocked-data';
import { CourseItemInfo } from '../core/models';
import { OrderByTitleNamePipe } from '../core/pipes/orderByTitleName.pipe';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  private coursesList: CourseItemInfo[] = fakeVideoList;

  constructor(private orderByTitleNamePipe: OrderByTitleNamePipe) { }

  public getCourses(): CourseItemInfo[] {
    return this.coursesList;
  }

  public sendMessageSortByName(): void {
    this.orderByTitleNamePipe.transform(this.coursesList);
  }
}
