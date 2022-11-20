import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';

const routes: Routes = [
  {path:'', redirectTo: 'currency-list', pathMatch:'full'},
  {path: 'currency-list', component: CurrencyExchangeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
