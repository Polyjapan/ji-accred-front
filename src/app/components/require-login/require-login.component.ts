import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-require-login',
  templateUrl: './require-login.component.html',
  styleUrls: ['./require-login.component.css']
})
export class RequireLoginComponent implements OnInit {
  url = environment.auth.apiurl + '/login?app=' + environment.auth.clientId;

  constructor() { }

  ngOnInit() {
    //window.location.replace(this.url);
  }

}
