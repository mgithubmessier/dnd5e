export class MiscBonus {
    detail: string;
    bonus: number;
}
export class Skill {
    proficiency: boolean;
    name: string;
    miscBonuses: Array<MiscBonus> = [];
    hideSkillDetail: boolean = true;
    constructor(name: string) {
      this.name = name;
    }
    setProficiency(proficiency: boolean) {
      this.proficiency = proficiency;
    }
    calculateBonus(abilityBonus): number {
        let bonus: number = Number(abilityBonus);
        this.miscBonuses.forEach((miscBonus) => bonus += Number(miscBonus.bonus));
        bonus += this.proficiency ? 3 : 0;
        return bonus;
    }
    addMiscBonus() {
        this.miscBonuses.push({ detail: 'Miscellaneous Bonus Detail', bonus: 0 });
    }
  }