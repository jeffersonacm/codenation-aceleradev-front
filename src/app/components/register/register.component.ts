import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { User } from 'src/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  public hide: Boolean = true;

  public emailUsed: Boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  register(registerFormValue) {
    let user: User = {
      name: registerFormValue.name,
      email: registerFormValue.email,
      password: registerFormValue.password
    };

    this.execRegister(user);
  }

  execRegister(user) {
    this.authService.register(user).subscribe(data => {
      this.goToLogin(data);
    }, error => {
      console.log(error.status);
      this.emailUsed = true;
      if(error.status == 400) {
      }
    });
  }

  goToLogin(data) {
    this.router.navigate(['login'], data);
  }
}
