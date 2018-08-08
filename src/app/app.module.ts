import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HW1EX1Component } from './hw1-ex1/hw1-ex1.component';
import { HW1EX2Component } from './hw1-ex2/hw1-ex2.component';
import { HW1SELECTORComponent } from './hw1-selector/hw1-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HW1EX1Component,
    HW1EX2Component,
    HW1SELECTORComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
