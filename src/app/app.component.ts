import { Component } from '@angular/core';

import { ApiService, Auth } from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private api: ApiService, private auth: Auth) {
    
  }
}
