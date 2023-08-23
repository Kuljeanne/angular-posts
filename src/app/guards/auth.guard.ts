import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const logInGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  let isLoggedIn;
  
  authService.checkAuth().subscribe((user) => {
    isLoggedIn = !!user;
  });
  if (isLoggedIn) {
    return true;
  }

  return router.parseUrl('/');
};