import { Injectable } from '@angular/core';
import { Ability, StrengthAbility, DexterityAbility, ConstitutionAbility, IntelligenceAbility, WisdomAbility, CharismaAbility } from '../models/ability.model';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class AbilityScoreService {
  private abilityScoresSubject: Map<string, BehaviorSubject<Ability>> = new Map<string, BehaviorSubject<Ability>>();
  constructor() {
    this.abilityScoresSubject.set('Strength', new BehaviorSubject<StrengthAbility>(new StrengthAbility(10)));
    this.abilityScoresSubject.set('Dexterity', new BehaviorSubject<DexterityAbility>(new DexterityAbility(10)));
    this.abilityScoresSubject.set('Constitution', new BehaviorSubject<ConstitutionAbility>(new ConstitutionAbility(10)));
    this.abilityScoresSubject.set('Intelligence', new BehaviorSubject<IntelligenceAbility>(new IntelligenceAbility(10)));
    this.abilityScoresSubject.set('Wisdom', new BehaviorSubject<WisdomAbility>(new WisdomAbility(10)));
    this.abilityScoresSubject.set('Charisma', new BehaviorSubject<CharismaAbility>(new CharismaAbility(10)));
  }
  get(): Array<Observable<Ability>> {
    let abilityScoreObsArray: Array<BehaviorSubject<Ability>> = [];
    this.abilityScoresSubject.forEach((abilityScoreSubject) => abilityScoreObsArray.push(abilityScoreSubject));
    return abilityScoreObsArray;
  }
  getAbility(ability: string): BehaviorSubject<Ability> {
    return this.abilityScoresSubject.get(ability) ? this.abilityScoresSubject.get(ability) : null;
  }
  setAbility(ability: Ability) {
    this.abilityScoresSubject.get(ability.ability).next(ability);
  }
}
