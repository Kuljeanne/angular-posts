import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, IUser } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<IPost[]>(this.url);
  }

  getPostById(id: number) {
    return this.http.get<IPost>(`${this.url}/${id}`);
  }
}
