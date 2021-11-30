import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccordionModule } from './features/accordion/accordion.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AccordionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
