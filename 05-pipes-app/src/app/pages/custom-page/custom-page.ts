import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-colo.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';

import { heroes } from '../../data/heroes.data';

import type { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    HeroFilterPipe,
  ],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  name = signal('Daniel Plascencia');
  upperCase = signal(true);

  heroes = signal(heroes);
  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');

  toggle() {
    this.upperCase.update((prev) => !prev);
  }
}
