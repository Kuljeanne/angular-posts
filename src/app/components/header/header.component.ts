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

  private checkUser(user: ICurrentUser | null) {
    this.user = user;
    this.authAction = user ? 'Выйти' : 'Войти';
  }
  ngOnInit(): void {
    this.authService.checkAuth().subscribe((user) => {
      this.checkUser(user);
    });
  }

  authorize() {
    this.user
      ? this.authService.logOut().subscribe((user) => {
          this.checkUser(user);
          this.router.navigate(['/'])
        })
      : this.router.navigate(['login']);
  }
}
