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
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private mindSer: MindSerService, private thisrouter: Router, public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
