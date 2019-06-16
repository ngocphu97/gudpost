import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ILoginUser } from '../../models/login-user.model';
import { LoginService } from '../../services/login.service';

declare const FB: any;

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
    private formBuilder: FormBuilder,
    private loginService: LoginService
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

  loginWithFacebook(e) {
    this.loginService.loginFacebook().pipe()
      .subscribe((response: any) => {
        alert('Your token will exprise in ' + response.expiresIn);
        // this.router.navigate(['/home']);
      });
  }

  logout() {
    this.loginService.logOutFacebook().subscribe(res => console.log(res));
  }

}
