import { Component, OnInit } from '@angular/core';
import { ApiService, Auth } from '../../shared';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: Auth) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Login');
  }

}
