import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LogComponent } from './components/log/log.component';
import { DetailsLogComponent } from './components/details-log/details-log.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recovery-password', component: RecoveryPasswordComponent },
  { path: 'change-password/:id', component: ChangePasswordComponent },
  { path: 'log', component: LogComponent },
  { path: 'details-log', component: DetailsLogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
