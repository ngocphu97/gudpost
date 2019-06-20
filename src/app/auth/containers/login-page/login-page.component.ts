import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ILoginUser } from '../../models/login-user.model';
import { LoginService } from '../../services/login.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  submit(user: ILoginUser): void {
    this.isValidUser(user).subscribe(res => {
      if (res) {
        this.router.navigate(['/home']);
      }
    });
  }

  isValidUser(loginUser: ILoginUser): Observable<boolean> {
    return this.loginService.getAllUsers().pipe(
      map(users => {
        let isValid = false;
        users.some(user => {
          if (user.email === loginUser.username && user.password === loginUser.password) {
            isValid = true;
          }
        });
        return isValid;
      })
    );
  }


  loginWithFacebook(loginSignal: boolean): void {
    if (loginSignal) {
      this.loginService.loginFacebook().pipe()
        .subscribe(() => {
          this.router.navigate(['/home']);
        });
    }
  }

  dismissAlert(): void {
    this.hasErrors = undefined;
  }
}
