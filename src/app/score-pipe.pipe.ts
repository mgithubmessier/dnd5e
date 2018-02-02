import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scorePipe'
})
export class ScorePipePipe implements PipeTransform {

  transform(value: number): number {
    return typeof value !== 'number' || value >= 0 ? value : 0;
  }

}
