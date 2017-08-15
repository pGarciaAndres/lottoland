import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { EuroJackpotComponent } from './components/eurojackpot.component';
import { EuroJackpotService } from './services/eurojackpot.service';
// PrimeNG controls.
import { DataTableModule, SharedModule } from 'primeng/primeng';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    SharedModule
  ],
  declarations: [
    EuroJackpotComponent
  ],
  providers: [
    EuroJackpotService,
    {provide: LOCALE_ID,
    useValue: 'es-ES'}
  ],
  bootstrap: [EuroJackpotComponent]
})
export class AppModule { }
