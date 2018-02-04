import { Injectable } from '@angular/core';
import { Armor } from '../models/armor.model';

@Injectable()
export class ArmorService {

  constructor() { }
  getMaxDex(armors: Array<Armor>): number {
    let maxDex: number = -1;
    armors.forEach((armor) => {
      maxDex = maxDex < this.getMaxDexFromArmor(armor) ? this.getMaxDexFromArmor(armor) : maxDex;
    });
    return maxDex;
  }
  getMaxDexFromArmor(armor: Armor): number {
    switch(armor.type) {
      case 'Medium': {
        return 2; 
      }
      case 'Heavy': {
        return 0;
      }
      default: {
        return -1;
      }
    }    
  }
}
