import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'hero-page',
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal<string>('Ironman');
  age = signal<number>(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;

    return description;
  });

  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  });

  getHeroDescription() {
    return `${this.name()} is ${this.age()} years old`;
  }

  changeHero() {
    this.name.update(() => 'Thor');
  }

  changeAge() {
    this.age.update(() => 1500);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
