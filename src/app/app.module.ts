import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EagerComponent } from 'app/eager.component';
import { routing } from 'app/app.routing';

@NgModule({
  declarations: [
    AppComponent,
    EagerComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
