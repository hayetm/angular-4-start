import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PremierComponent } from './app.monpremiercomponent';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, PremierComponent]
})
export class AppModule { }
