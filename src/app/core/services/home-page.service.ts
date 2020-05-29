import { Injectable } from '@angular/core';
import { CourseItemInfo } from '../models';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';
import { LoadingBlockService } from './loading-block.service';

const BASE_URL: string = 'http://localhost:3000/courses';
@Injectable({
  providedIn: 'root'
})

export class HomePageService {

  constructor(
    private http: HttpClient,
    private loadingBlockService: LoadingBlockService
  ) { }

  public getCourses(): Observable<CourseItemInfo[]> {
    this.loadingBlockService.updateLoadingBlockState(true);
    return this.http.get<CourseItemInfo[]>(BASE_URL)
    .pipe(
      tap(() => this.loadingBlockService.updateLoadingBlockState(false))
    );
  }

  public searchCourse(text: string): Observable<CourseItemInfo[]> {
    const params: HttpParams = new HttpParams().set('q', text);
    this.loadingBlockService.updateLoadingBlockState(true);
    return this.http.get<CourseItemInfo[]>(`${BASE_URL}`, {
      params,
      responseType: 'json'
    })
    .pipe(
      tap(() => this.loadingBlockService.updateLoadingBlockState(false))
    );
  }

  public deleteCourseById(id: string): Observable<CourseItemInfo[]>  {
    this.loadingBlockService.updateLoadingBlockState(true);
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
        switchMap(() => this.getCourses()),
        tap(() => this.loadingBlockService.updateLoadingBlockState(false))
    );
  }

  public updateItem(id: string): Observable<CourseItemInfo> {
    this.loadingBlockService.updateLoadingBlockState(true);
    return this.http.get<CourseItemInfo>(`${BASE_URL}/${id}`)
      .pipe(
        tap(() => this.loadingBlockService.updateLoadingBlockState(false))
      );
  }
}
