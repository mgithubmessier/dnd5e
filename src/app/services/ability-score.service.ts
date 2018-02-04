import { Injectable } from '@angular/core';
import { Ability, StrengthAbility, DexterityAbility, ConstitutionAbility, IntelligenceAbility, WisdomAbility, CharismaAbility } from '../models/ability.model';
@Injectable()
export class AbilityScoreService {
  abilityScores: Array<Ability> = [
    new StrengthAbility(10),
    new DexterityAbility(10),
    new ConstitutionAbility(10), 
    new IntelligenceAbility(10),
    new WisdomAbility(10), 
    new CharismaAbility(10)      
  ];
  constructor() { }
  get(): Array<Ability> {
      return this.abilityScores;
  }
  getAbility(ability?: string) {
    return this.abilityScores.find((abilityScore) => abilityScore.ability === ability);    
  }

}
