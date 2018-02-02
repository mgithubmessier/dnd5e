import { Skill } from './skill.model';
export abstract class Ability {
    ability: string;
    score: number;
    skills: Array<Skill>;
    constructor(score: number, ability: string, skills?: Array<Skill>) {
      this.score = score;
      this.ability = ability;
      this.skills = skills;
    }
    getBonus(): number {
      return Math.floor((this.score - 10)/2);
    }
  }
  export class StrengthAbility extends Ability {
    constructor(score: number) {
      super(score, 'Strength', 
        [new Skill('Athletics')]);
    }
  }
  export class DexterityAbility extends Ability {
    constructor(score: number) {
      super(score, 'Dexterity', 
        [new Skill('Acrobatics'), new Skill('Stealth'), new Skill('Slight of Hand')]);
    }
  }
  export class ConstitutionAbility extends Ability {
    constructor(score: number) {
      super(score, 'Constitution');
    }
  }
  export class IntelligenceAbility extends Ability {
    constructor(score: number) {
      super(score, 'Intelligence', 
        [new Skill('Arcana'), new Skill('History'), new Skill('Investigation'), new Skill('Nature'), new Skill('Religion')]);
    }
  }
  export class WisdomAbility extends Ability {
    constructor(score: number) {
      super(score, 'Wisdom', 
        [new Skill('Animal Handling'), new Skill('Insight'), new Skill('Medicine'), new Skill('Perception'), new Skill('Survival')]);
    }
  }
  export class CharismaAbility extends Ability {
    constructor(score: number) {
      super(score, 'Charisma', 
        [new Skill('Deception'), new Skill('Intimidation'), new Skill('Performance'), new Skill('Persuasion')]);
    }
  }