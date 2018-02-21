import { Component, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ability } from '../models/ability.model';
import { AbilityScoreComponent } from '../ability-score/ability-score-component';
import { AbilityScoreService } from '../services/ability-score.service';

@Component({
  selector: 'skill-component',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent extends AbilityScoreComponent {
  @Input() abilityScore: Ability;
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  constructor(abilityService: AbilityScoreService, elementRef: ElementRef) { 
    super(abilityService, elementRef);
  }
}
