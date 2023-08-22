import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ICurrentUser } from 'src/app/types';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent {
  authForm = this.formBuilder.group({
    login: new FormControl('', [Validators.required, Validators.maxLength(16)]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    ]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService
      .logIn(this.authForm.value as ICurrentUser)
      .subscribe({ next: () => this.router.navigate(['posts']) });
  }
}
