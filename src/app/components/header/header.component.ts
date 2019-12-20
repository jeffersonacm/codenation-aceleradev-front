import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private principalService: PrincipalService) { }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.principalService.isAuthenticated();
  }

  logout() {
    console.log('aq');
    return this.principalService.logout();
  }
}
