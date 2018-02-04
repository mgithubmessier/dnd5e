import { Component, Input, OnInit } from '@angular/core';
import { AbilityScoreService } from '../services/ability-score.service';
import { Ability } from '../models/ability.model';

@Component({
  selector: 'ability-score-component',
  templateUrl: './ability-score-component.html',
  styleUrls: ['./ability-score-component.scss']
})
export class AbilityScoreComponent implements OnInit {
  abilityScores: Array<Ability>;
  constructor(private abilityService: AbilityScoreService) { }
  ngOnInit() {
    this.abilityScores = this.abilityService.get();
  }
}
