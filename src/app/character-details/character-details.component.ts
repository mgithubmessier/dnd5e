import { Component, Input } from '@angular/core';

export class CharacterDetail {
  name: string;
  detail: string;
  constructor(name: string) {
    this.name = name;
  }
}
@Component({
  selector: 'character-details-component',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent {
  characterDetails: Array<CharacterDetail> = [new CharacterDetail('New Detail')];
  constructor() { }
}
