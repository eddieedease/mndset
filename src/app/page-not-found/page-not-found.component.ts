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
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private mindSer: MindSerService, private thisrouter: Router, public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
