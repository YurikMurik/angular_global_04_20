import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseAuthors } from '../models';
import { LoadingBlockService } from './loading-block.service';

const BASE_URL: string = 'http://localhost:3000/authors';
@Injectable({
  providedIn: 'root'
})

export class CustomAuthorsInputService {

  constructor(
    private http: HttpClient,
    private loadingBlockService: LoadingBlockService
  ) { }

  public getAuthors(id: string): Observable<CourseAuthors> {
    return this.http.get<CourseAuthors>(`${BASE_URL}/${id}`);
  }

  public searchAuthors(text: string): Observable<CourseAuthors> {
    const params: HttpParams = new HttpParams().set('name_like', text);
    return this.http.get<CourseAuthors>(`${BASE_URL}`, {
      params,
      responseType: 'json'
    });
  }
}
