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
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private mindSer: MindSerService, private thisrouter: Router, public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
