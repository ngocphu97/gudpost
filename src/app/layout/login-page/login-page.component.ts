import { Component, OnInit, ɵConsole } from '@angular/core';
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
        username: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
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
    if (this.loginForm.invalid) {
      const controls = this.loginForm.controls;
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      this.hasErrors = true;
      return;
    }

    const loginUser = this.loginForm.value;
    this.router.navigate(['/home']);
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
