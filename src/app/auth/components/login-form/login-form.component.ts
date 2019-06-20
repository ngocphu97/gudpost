import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ILoginUser } from '../../models/login-user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  loginForm: FormGroup;
  hasErrors = false;

  @Output() rememberMe = new EventEmitter(false);
  @Output() loginUser = new EventEmitter();
  @Output() loginWithFacebook = new EventEmitter(false);

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        rememberMe: [false],
      }
    );
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.loginForm.get(fieldName);
    return control.invalid && control.touched;
  }

  isFormValid() {
    if (this.loginForm.invalid) {
      const controls = this.loginForm.controls;
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      this.hasErrors = true;
      return false;
    }
    this.hasErrors = false;
    return true;
  }

  submit() {
    if (this.isFormValid()) {
      const user: ILoginUser = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
        rememberMe: this.loginForm.value.rememberMe
      };
      this.loginUser.emit(user);
    }
  }

  loginFacebook() {
    this.loginWithFacebook.emit(true);
  }
}
