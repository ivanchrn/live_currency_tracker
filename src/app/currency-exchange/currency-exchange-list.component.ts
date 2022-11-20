import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CurrencyExchange } from './currency-exchange.interfaces';

@Component({
  selector: 'app-currency-exchange-list',
  templateUrl: './currency-exchange-list.component.html',
  styleUrls: ['./currency-exchange-list.component.scss']
})
export class CurrencyExchangeListComponent implements OnChanges {

  @Input()
  public currencyData: CurrencyExchange[] = [];
  
  public showWarningMsg: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.showWarningMsg = changes['currencyData'].currentValue.length === 0;
  }
}
