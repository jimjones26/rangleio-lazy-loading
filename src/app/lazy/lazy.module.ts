import { NgModule } from '@angular/core';

import { LazyComponent } from './lazy.component';
import { routing } from './lazy.routing';
import { CounterService } from 'app/lazy/counter.service';

@NgModule({
  imports: [routing],
  declarations: [LazyComponent],
  providers: [CounterService]
})
export class LazyModule { }
