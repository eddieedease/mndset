import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {

  // testing purposes
  objects = [1, 1, 1, 1, 1, 1, 1, 1];

  constructor() {}

  ngOnInit() {}

}
