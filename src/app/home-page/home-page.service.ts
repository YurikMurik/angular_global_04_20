import { Injectable } from '@angular/core';
import { fakeVideoList } from '../core/mocks/mocked-data';
import { CourseItemInfo } from '../core/models';
import { OrderByTitleNamePipe } from '../core/pipes/orderByTitleName.pipe';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  constructor(private orderByTitleNamePipe: OrderByTitleNamePipe) { }

  public getCourses(): CourseItemInfo[] {
    const coursesList: CourseItemInfo[] = fakeVideoList;
    return coursesList;
  }

  public sendMessageSortByName(): void {
    this.orderByTitleNamePipe.transform(fakeVideoList);
  }
}
