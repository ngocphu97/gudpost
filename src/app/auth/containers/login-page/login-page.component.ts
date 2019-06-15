import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILoginUser } from '../../models/login-user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  loginForm: FormGroup;
  hasErrors: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group(
      {
        username: [undefined, [Validators.required, Validators.email]],
        password: [undefined, Validators.required],
        rememberMe: [''],
      }
    );
  }

  submit(user: ILoginUser) {
    console.log(user);
    if (this.isValidUser(user)) {
      this.router.navigate(['/home']);
    }
  }

  isValidUser(user: ILoginUser): boolean {
    const validUser = {
      username: 'admin@gudpost.net',
      password: 'admingudpost123'
    };
    if (validUser.username !== user.username
      || validUser.password !== user.password) {
      this.hasErrors = true;
      return false;
    }
    return true;
  }

  onDismissAlert() {
    this.hasErrors = undefined;
  }

  /**
   * TODO: Login with Facebook
   */
  loginWithFacebook() {
    alert('Login with Facebook Success');
    this.router.navigate(['/home']);
  }

}
