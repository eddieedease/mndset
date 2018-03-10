import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MindSerService {
  // Observable string sources
  private loadUI = new Subject<boolean>();

  constructor() { }

  // Observable string streams
  loadUIState$ = this.loadUI.asObservable();

  // Service message commands
  activateUI(uistate: boolean) {
    this.loadUI.next(uistate);
  }


}
