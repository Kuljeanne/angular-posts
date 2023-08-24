import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../types';
import { ErrorService } from './error.service';
import { catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient, private errorHandler: ErrorService) {}

  getUsers() {
    return this.http
      .get<IUser[]>(this.url)
      .pipe(retry(3), catchError(this.errorHandler.handleError));
  }

  getUserById(id: number) {
    return this.http
      .get<IUser>(`${this.url}/${id}`)
      .pipe(retry(3), catchError(this.errorHandler.handleError));
  }

  getUserName(users: IUser[], userId: number): string | undefined {
    const user = users.find(({ id }) => id === userId);
    return user?.username;
  }
}
