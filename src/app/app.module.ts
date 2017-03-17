import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';

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
    SharedModule.forRoot(),
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
