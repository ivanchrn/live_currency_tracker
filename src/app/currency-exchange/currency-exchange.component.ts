import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { CurrencyExchange, CurrencyExchangeList } from './currency-exchange.interfaces';
import { CurrencyExchangeSerivce } from './currency-exchange.service';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExchangeComponent implements OnInit {

  public filteredCurrencyData: CurrencyExchange[] = [];

  public fromCurrenciesList: string[] = [];
  
  public toCurrenciesList: string[] = [];

  private selectedFromCurrency: string = "";

  private selectedToCurrency: string = "";

  private selectedRefreshValue: number = 5;

  private interval: Subscription = new Subscription;

  private data$: Observable<CurrencyExchangeList> = new Observable;

  constructor(private currencyExchangeService: CurrencyExchangeSerivce) {
  };

  ngOnInit(): void {
    this.getData();
  }

  public handleFromCurrencyChange(event: string): void {
    this.selectedFromCurrency = event;
  };

  public handleToCurrencyChange(event: string): void {
    this.selectedToCurrency = event;
  };

  public searchDataByTimer(): void {
    this.interval.unsubscribe();
    this.interval = timer(0, this.selectedRefreshValue * 1000)
      .subscribe(() => {
        this.search();
    });
  };

  public isCurrenciesFieldsEmpty(): boolean {
    return this.selectedFromCurrency === "" || this.selectedToCurrency === "";
  }

  private getData(): void {
    this.data$ = this.currencyExchangeService.getAllCurrencies();
    this.data$.subscribe((data: CurrencyExchangeList) => {
      this.getCurrencies(data.forexList);
    });
  };
  
  private getCurrencies(data: CurrencyExchange[]): void {
    let fromCurrenciesSet: Set<string> = new Set<string>();
    let toCurrenciesSet: Set<string> = new Set<string>();
    data.forEach(item => {
      fromCurrenciesSet.add(item.ticker.split('/')[0]);
      toCurrenciesSet.add(item.ticker.split('/')[1]);
    });
    this.fromCurrenciesList = Array.from(fromCurrenciesSet).sort();
    this.toCurrenciesList = Array.from(toCurrenciesSet).sort();
  };

  private search(): void {
    this.data$.subscribe((data: CurrencyExchangeList) => {
      this.sortData(data.forexList);
    });
  };

  private sortData(data: CurrencyExchange[]): void {
    this.filteredCurrencyData = data.filter(item => {
      return item.ticker === `${this.selectedFromCurrency}/${this.selectedToCurrency}`;
    });
  };
}
