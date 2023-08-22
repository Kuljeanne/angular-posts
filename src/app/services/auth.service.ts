import { Injectable } from '@angular/core';
import { ICurrentUser } from '../types';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  logIn(regData: ICurrentUser): Observable<boolean> {
    const userData = JSON.stringify(regData);
    localStorage.setItem('user', userData);
    return of(true);
  }
  logOut(): Observable<null> {
    localStorage.removeItem('user');
    return of(null);
  }
  checkAuth(): Observable<ICurrentUser | null> {
    const data = localStorage.getItem('user');
    const currentUser = data ? JSON.parse(data) : null;
    return of(currentUser);
  }
}
