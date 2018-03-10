import {
  Component,
  OnInit
} from '@angular/core';


import {
  MindSerService
} from './mind-ser.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  // Toggling UI var
  loadUI = false;

  constructor(private mindSer: MindSerService) {
    mindSer.loadUIState$.subscribe(
      some => {
        console.log(`${some} from appcomp rxjs`);
        if (some){
          this.loadUI = true;
        } else {
          this.loadUI = false;
        }
      });
  }




}
