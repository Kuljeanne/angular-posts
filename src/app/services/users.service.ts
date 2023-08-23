import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<IUser[]>(this.url);
  }

  getUserById(id:number) {
    return this.http.get<IUser>(`${this.url}/${id}`);
  }

  getUserName(users: IUser[], userId: number): string | undefined {
    const user = users.find(({ id }) => id === userId);
    return user?.username;
  }
}
