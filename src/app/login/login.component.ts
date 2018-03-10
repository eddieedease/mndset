import {
  Component,
  EventEmitter,
  OnInit
} from '@angular/core';

// we want the login component injected for authentication ui managing.

import {
  AppComponent
} from '../app.component';


import {
  MindSerService
} from '../mind-ser.service';

import {
  DomSanitizer
} from '@angular/platform-browser';

import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  //
  inputEmail;

  inputPwd;

  constructor(private mindSer: MindSerService, private thisrouter: Router, public sanitizer: DomSanitizer) {
    mindSer.loadUIState$.subscribe(
      some => {
        console.log(`${some} from login rxjs`);
      });
  }

  ngOnInit() {

  }


  // logging in
  logInNow() {
    this.mindSer.activateUI(true);
    this.thisrouter.navigate(['view']);
  }

}
