import { Component, OnInit } from '@angular/core';
import { ApiService, Auth } from '../shared';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth: Auth) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
