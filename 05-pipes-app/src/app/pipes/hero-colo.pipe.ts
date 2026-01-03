import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroColor',
})
export class HeroColorPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return Color[value];
  }
}
