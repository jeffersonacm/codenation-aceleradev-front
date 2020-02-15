import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
//import { MatSnackBar } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss'],
  providers: []
})
export class RecoveryPasswordComponent implements OnInit {

  public recoveryForm: FormGroup;


  constructor(private authService: AuthService, private matSnap: MatSnackBar) { 
    this.recoveryForm = new FormGroup({
      email: new FormControl(""   , [Validators.required, Validators.email])
    });
  }

  ngOnInit() {  }

  public hasError = (controlName: string, errorName: string) => {
    return this.recoveryForm.controls[controlName].hasError(errorName);
  }

  public presentAlert(mensagem: string) {
    this.matSnap.openFromComponent(SnackBarComponent2, { duration: 10000})
  }

  public recovery(recoveryFormValue) {
    this.authService.recoveryRequest(recoveryFormValue.email).subscribe(data => {
      // this.mailSend = true;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}

@Component({
  selector: 'app-snack-bar',
  templateUrl: '../snack-bar/snack-bar.component.html',
})
export class SnackBarComponent2 {}
