import { Injectable } from '@angular/core';
import { ICurrentUser } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  logIn({}: ICurrentUser) {}
  logOut() {}
  checkAuth() {}
}
