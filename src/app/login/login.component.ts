import { Component, OnInit } from '@angular/core';
import { MindSerService } from '../mind-ser.service';

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

  constructor(private mindSer: MindSerService, private thisrouter: Router, public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }


  // logging in
  logInNow(){
    console.log("yay");
    this.thisrouter.navigate(['view']);
  }

}
