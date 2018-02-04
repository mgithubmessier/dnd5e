import { Injectable } from '@angular/core';

@Injectable()
export class UtlilityService {

  constructor() { }
  adjustTextAreaHeight($event) {
    $event.target.style.height = ($event.target.scrollHeight-4)+'px';
  }

}
