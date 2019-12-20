import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  goToRecovery() {
    this.router.navigate(['recovery-password']);
  }

  login() {
    this.router.navigate(['log']);s
    // console.log(localStorage);
    // this.loginService.login(this.user).subscribe(data => {
    //   this.loginSuccess(data);
    //   console.log(data);
    // }, error => {
    //   console.log('deu ruim');
    // });
  }

  public loginSuccess(data) {
    localStorage.clear();
    localStorage.setItem('accessToken', 'data.access_token');
    localStorage.setItem('refreshToken', 'data.refresh_token');
    this.redirectPage();
  }

  public redirectPage() {
    localStorage.setItem('currentUser', JSON.stringify('user'));
    this.router.navigate(['log']);
  }

}
