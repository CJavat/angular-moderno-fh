import { Pipe, PipeTransform } from '@angular/core';

export type CanFlyType = 'Puede volar' | 'No puede volar';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): CanFlyType {
    return value ? 'Puede volar' : 'No puede volar';
  }
}
