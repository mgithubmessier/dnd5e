import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonusPipe'
})
export class BonusPipePipe implements PipeTransform {

  transform(value: number): string {
    return value > 0 ? '+' + value : value.toString();
  }

}
