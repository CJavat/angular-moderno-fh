import { Component, input } from '@angular/core';

import type { Character } from '../../../interfaces/character.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
  imports: [DecimalPipe],
})
export class CharacterList {
  listName = input.required<string>();
  characters = input.required<Character[]>();
}
