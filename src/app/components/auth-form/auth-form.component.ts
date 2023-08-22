import { Component} from '@angular/core';
import { FormBuilder, FormControl, Validators,} from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent {
  authForm = this.formBuilder.group({
    login: new FormControl('', [Validators.required, Validators.maxLength(16)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
  })

  constructor(private formBuilder: FormBuilder,) {}

  onSubmit(){
    console.log(this.authForm.value)
  }
}
