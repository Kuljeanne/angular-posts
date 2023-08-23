import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-not-auth',
  templateUrl: './not-auth.component.html',
  styleUrls: ['./not-auth.component.css'],
})
export class NotAuthComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.authService.checkAuth().subscribe((user) => {
      if (user) {
        this.router.navigate(['/posts']);
      }
    });
  }
}
