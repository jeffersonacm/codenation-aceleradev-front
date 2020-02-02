import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserLogin } from 'src/model/userLogin';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public hide: Boolean = true;
  public loginInvalid: Boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  public login = (loginFormValue) => {
    if (this.loginForm.valid) {
      this.execlogin(loginFormValue);
    }
  } 

  public goToRecovery() {
    this.router.navigate(['recovery-password']);
  }

  public execlogin(loginFormValue) {
    //this.router.navigate(['log']); 

    let user: UserLogin = {
      email: loginFormValue.email,
      password: loginFormValue.password
    }
    
    this.authService.login(user).subscribe(data => {
      this.loginSuccess(data);
    }, error => {
      this.loginInvalid = true;
      console.log(error.error);
    });
  }

  public loginSuccess(data) {
    localStorage.clear();
    localStorage.setItem('accessToken', 'data.access_token');
    localStorage.setItem('refreshToken', 'data.refresh_token');
    this.redirectLogPage();
  }

  public redirectLogPage() {
    localStorage.setItem('currentUser', JSON.stringify('user'));
    this.router.navigate(['log']);
  }

}
