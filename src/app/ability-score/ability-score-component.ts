import { Component, Input, OnInit, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';
import { AbilityScoreService } from '../services/ability-score.service';
import { Ability } from '../models/ability.model';

@Component({
  selector: 'ability-score-component',
  templateUrl: './ability-score-component.html',
  styleUrls: ['./ability-score-component.scss']
})
export class AbilityScoreComponent implements OnInit {
  abilityScores: Array<Ability> = [];
  constructor(private abilityService: AbilityScoreService, private elementRef: ElementRef) { }
  ngOnInit() { 
    this.abilityService.get().forEach((abilityScoreSubject, index) => {
      abilityScoreSubject.subscribe((abilityScore: Ability) => {
        this.abilityScores[index] = abilityScore;
        console.log('IT RAN!!!', abilityScore);
      });
    }); 
  }
}
