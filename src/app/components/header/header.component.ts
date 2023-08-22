import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ICurrentUser } from 'src/app/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public user!: ICurrentUser | null;
  public authAction!: 'Войти' | 'Выйти';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.checkAuth().subscribe({
      next: (user) => {
        this.user = user;
        this.authAction = user ? 'Выйти' : 'Войти';
      },
    });
  }

  authorize() {
    this.user
    ? this.authService.logOut() 
    : this.router.navigate(['login']);
  }
}
