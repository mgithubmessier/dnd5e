import { Injectable, OnInit } from '@angular/core';
import { Ability, StrengthAbility, DexterityAbility, ConstitutionAbility, IntelligenceAbility, WisdomAbility, CharismaAbility } from '../models/ability.model';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { plainToClass } from 'class-transformer';

@Injectable()
export class AbilityScoreService implements OnInit {
  private abilityScoresSubject: Map<string, BehaviorSubject<Ability>> = new Map<string, BehaviorSubject<Ability>>();
  private getAbilitiesObs: Observable<any>;
  constructor(private httpClient: HttpClient) {
    this.abilityScoresSubject.set('Strength', new BehaviorSubject<StrengthAbility>(new StrengthAbility(10)));
    this.abilityScoresSubject.set('Dexterity', new BehaviorSubject<DexterityAbility>(new DexterityAbility(10)));
    this.abilityScoresSubject.set('Constitution', new BehaviorSubject<ConstitutionAbility>(new ConstitutionAbility(10)));
    this.abilityScoresSubject.set('Intelligence', new BehaviorSubject<IntelligenceAbility>(new IntelligenceAbility(10)));
    this.abilityScoresSubject.set('Wisdom', new BehaviorSubject<WisdomAbility>(new WisdomAbility(10)));
    this.abilityScoresSubject.set('Charisma', new BehaviorSubject<CharismaAbility>(new CharismaAbility(10)));
    this.ngOnInit();
  }
  ngOnInit() {
    this.httpClient.get('http://localhost:8080/get').subscribe((abilities: Array<Ability>) => {
      console.log(abilities);
      // console.log(plainToClass(StrengthAbility, response.abilities.find((ability) => ability.name === 'Strength')));
      this.abilityScoresSubject.get('Strength').next(plainToClass(StrengthAbility, abilities.find((ability) => ability.name === 'Strength')));
      this.abilityScoresSubject.get('Dexterity').next(plainToClass(DexterityAbility, abilities.find((ability) => ability.name === 'Dexterity')));
      this.abilityScoresSubject.get('Constitution').next(plainToClass(ConstitutionAbility, abilities.find((ability) => ability.name === 'Constitution')));
      this.abilityScoresSubject.get('Intelligence').next(plainToClass(IntelligenceAbility, abilities.find((ability) => ability.name === 'Intelligence')));
      this.abilityScoresSubject.get('Wisdom').next(plainToClass(WisdomAbility, abilities.find((ability) => ability.name === 'Wisdom')));
      this.abilityScoresSubject.get('Charisma').next(plainToClass(CharismaAbility, abilities.find((ability) => ability.name === 'Charisma')));

      console.log(this.abilityScoresSubject);
    });
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
    this.httpClient.post('http://localhost:8080/save', ability, { 
        headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
      }).subscribe();
    this.abilityScoresSubject.get(ability.name).next(ability);
  }
}
