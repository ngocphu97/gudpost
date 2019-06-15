import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  hasErrors: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group(
      {
        username: ['admin@gudpost.net', [Validators.required, Validators.email]],
        password: ['admingudpost123', Validators.required],
        rememberMe: [''],
      }
    );
  }

  ngOnInit() {
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.loginForm.get(fieldName);
    return control.invalid && control.touched;
  }

  submit() {
    if (this.isFormValid() && this.isValidUser()) {
      this.router.navigate(['/home']);
    }
  }

  isValidUser(): boolean {
    const validUser = {
      username: 'admin@gudpost.net',
      password: 'admingudpost123'
    };
    if (validUser.username !== this.loginForm.value.username
      || validUser.password !== this.loginForm.value.password) {
      this.hasErrors = true;
      return false;
    }
    return true;
  }

  isFormValid(): boolean {
    if (this.loginForm.invalid) {
      const controls = this.loginForm.controls;
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      this.hasErrors = true;
      return false;
    }
    return true;
  }

  onDismissAlert() {
    this.hasErrors = undefined;
  }

  onClickLogin() {
    // TODO: Login with Facebook
    this.router.navigate(['/home']);
  }

  onCheckRememberMe(inputUsername: string, inputPassword: string) {
    this.loginForm.patchValue({
      username: inputUsername,
      password: inputPassword,
      rememberMe: true
    });
  }

}
