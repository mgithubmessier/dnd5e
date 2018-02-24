import { Component, Input, HostListener } from '@angular/core';
import { Ability } from '../models/ability.model';
import { Armor } from '../models/armor.model';

import { ArmorService }  from '../services/armor.service';
import { AbilityScoreService } from '../services/ability-score.service';

@Component({
  selector: 'armor-component',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.scss']
})
export class ArmorComponent {
  armors: Array<Armor> = [{ name: 'New Armor', type: 'Light', armorClass: 10 }];
  totalAC: number;
  private dexBonus: number;
  constructor(private abilityService: AbilityScoreService, private armorService: ArmorService) {
    this.abilityService.getAbility('Dexterity').subscribe((dexAbiltyScore) => {
      this.dexBonus = dexAbiltyScore.getBonus();
      this.calculateAC();
    });    
  }
  private calculateAC() {
    let maxDex: number = this.armorService.getMaxDex(this.armors);
    this.totalAC = maxDex > -1 && this.dexBonus > maxDex ? maxDex : this.dexBonus;
    this.armors.forEach((armor) => this.totalAC += armor.armorClass);
  }
}
