import { Component, OnInit } from '@angular/core';
import { ApiService, Auth } from '../shared';

@Component({
  selector: 'my-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  profile:any;

  constructor(private auth: Auth) {
     this.profile = JSON.parse(localStorage.getItem('profile'));
  }

  ngOnInit() {
    console.log('Hello account');
  }

}
