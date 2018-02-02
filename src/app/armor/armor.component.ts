import { Component, Input } from '@angular/core';

export class Armor {
  name: string;
  detail: string;
  armorClass: number;
  constructor(name: string) {
    this.name = name;
  }
}
@Component({
  selector: 'armor-component',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.scss']
})
export class ArmorComponent {
  armors: Array<Armor> = [new Armor('New Armor')];
  constructor() { }
}
