import { DecimalPipe, NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball-page',
  templateUrl: './dragonball-page.component.html',
  imports: [DecimalPipe],
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 15000 },
    { id: 2, name: 'Vegeta', power: 13500 },
    { id: 3, name: 'Trunks', power: 11000 },
    { id: 4, name: 'Yamcha', power: 500 },
    { id: 5, name: 'Piccolo', power: 2500 },
  ]);

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   };
  // });
}
