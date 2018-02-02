import { Component, OnInit, Input } from '@angular/core';

export class Equipment {
  name: string;
  weight: number;
  detail: string;
  constructor(name: string) {
    this.name = name;
  }
}
@Component({
  selector: 'equipment-component',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent {
  equipments: Array<Equipment> = [new Equipment('New Equipment')];
  constructor() { }
}
