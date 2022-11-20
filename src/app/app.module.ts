import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyExchangeListComponent } from './currency-exchange/currency-exchange-list.component';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { DropdownComponent } from './ui-components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyExchangeComponent,
    CurrencyExchangeListComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
