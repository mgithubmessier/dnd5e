import { Component, Input } from '@angular/core';
import { Ability, StrengthAbility, DexterityAbility, ConstitutionAbility, IntelligenceAbility, WisdomAbility, CharismaAbility } from '../models/ability.model';
@Component({
  selector: 'ability-score-component',
  templateUrl: './ability-score-component.html',
  styleUrls: ['./ability-score-component.scss']
})
export class AbilityScoreComponent {
  abilityScores: Array<Ability> = [
    new StrengthAbility(10),
    new DexterityAbility(10),
    new ConstitutionAbility(10), 
    new IntelligenceAbility(10),
    new WisdomAbility(10), 
    new CharismaAbility(10)      
  ];
  constructor() { }
}
