import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'counter-page',
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
      border-radius: 5px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  public counter: number = 10;
  counterSignal = signal(10);

  constructor() {
    setInterval(() => {
      // this.counter++;
      // this.counterSignal.update((v) => v + 1);
      this.increaseBy(1);
      console.log('tick');
    }, 2000);
  }

  increaseBy(value: number): void {
    this.counter += value;
    this.counterSignal.update((currentValue) => currentValue + value);
  }

  decreaseBy(value: number): void {
    this.counter -= value;
    this.counterSignal.update((currentValue) => currentValue - value);
  }

  resetCounter(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
