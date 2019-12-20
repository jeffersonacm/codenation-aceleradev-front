import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  public baseUrl: string;

  constructor(private router: Router) {
  }

  isAuthenticated(): Observable<boolean> {
    return new Observable<boolean> (observer => {
      if (JSON.parse(localStorage.getItem('currentUser'))) {
          console.log('wtf');
        observer.next(true);
        observer.complete();
      } else {
        console.log('DESLOGADO');
        observer.next(false);
      }
    });
  }

    logout() {
        localStorage.clear();
        this.router.navigate(['login']);
    }
}
