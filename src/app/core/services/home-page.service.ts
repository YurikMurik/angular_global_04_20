import { Injectable } from '@angular/core';
import { CourseItemInfo } from '../models';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

const BASE_URL: string = 'http://localhost:3000/courses';
@Injectable({
  providedIn: 'root'
})

export class HomePageService {

  constructor(
    private http: HttpClient,
  ) { }

  public getCourses(): Observable<CourseItemInfo[]> {
    return this.http.get<CourseItemInfo[]>(BASE_URL);
  }

  public searchCourse(text: string): Observable<CourseItemInfo[]> {
    const params: HttpParams = new HttpParams().set('q', text);
    return this.http.get<CourseItemInfo[]>(`${BASE_URL}`, {
      params,
      responseType: 'json'
    });
  }

  public deleteCourseById(id: string): Observable<CourseItemInfo[]>  {
    return this.http.delete<CourseItemInfo[]>(`${BASE_URL}/${id}`)
      .pipe(
        switchMap(() => this.getCourses())
      );
  }

  public createCourse(body: CourseItemInfo): Observable<Object> {
    const randomId: string = Math.random().toString(36).substr(2, 9);
    body.id = randomId;

    return this.http.post<CourseItemInfo>(BASE_URL, body)
      .pipe(
        switchMap(() => {
          return this.getCourses();
        })
    );
  }

  public updateItem(id: string): Observable<CourseItemInfo> {
      return this.http.get<CourseItemInfo>(`${BASE_URL}/${id}`);
  }
}
