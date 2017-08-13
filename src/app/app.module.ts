import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule, JsonpModule } from '@angular/http';

import { EuroJackpotComponent } from './eurojackpot.component';
import { EuroJackpotService } from './services/eurojackpot.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    EuroJackpotComponent
  ],
  providers: [
    EuroJackpotService
  ],
  bootstrap: [EuroJackpotComponent]
})
export class AppModule { }
