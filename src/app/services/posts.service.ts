import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../types';
import { catchError, retry } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient, private errorHandler: ErrorService) {}

  getPosts() {
    return this.http
      .get<IPost[]>(this.url)
      .pipe(retry(2), catchError(this.errorHandler.handleError));
  }

  getPostById(id: number) {
    return this.http
      .get<IPost>(`${this.url}/${id}`)
      .pipe(retry(2), catchError(this.errorHandler.handleError));
  }
}
