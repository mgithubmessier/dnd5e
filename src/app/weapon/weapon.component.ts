import { Component, Input } from '@angular/core';

export class Weapon {
  name: string = 'New Weapon';
  detail: string;
  damage: string;
  toHitBonus: number;
  constructor(name: string) {
    this.name = name;
  }
}
@Component({
  selector: 'weapon-component',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent {
  weapons: Array<Weapon> = [new Weapon('New Weapon')];
  constructor() { }
}
