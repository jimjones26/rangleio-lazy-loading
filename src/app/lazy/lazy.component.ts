import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  template: `
    <p>Lazy Component</p>
    <button (click)="increaseCounter()">Increase Counter</button>
    <p>Counter: {{ counterService.counter }}</p>`
})
export class LazyComponent {
  constructor(public counterService: CounterService) {
    console.log('lazy component constructor', this.counterService.counter);
  }

  increaseCounter() {
    this.counterService.counter += 1;
  }
}
