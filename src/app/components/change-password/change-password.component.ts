import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  private tokenHash:String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.tokenHash = this.route.snapshot.paramMap.get('id');
    console.log(this.tokenHash);
  }
}
