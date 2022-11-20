import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyExchangeList } from './currency-exchange.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeSerivce {

  private apiKey: string = 'd6e89a6975e1b7df664e3e00b705b874';
  private apiKey1: string = '673f7ef2e884a5d8db182d68a3c64130';
  private apiKey2: string = '7f6d4361a22ec7359447b457f76ea47f';
  private apiKey3: string = '43d05a3734e674a456c2273dcd149481';



  constructor(private http: HttpClient) {
  }

  public getAllCurrencies(): Observable<CurrencyExchangeList>{
    return this.http.get<CurrencyExchangeList>(`https://financialmodelingprep.com/api/v3/forex?apikey=${this.apiKey}`);
  };
};
