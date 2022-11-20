import { TestBed } from '@angular/core/testing';

import { CurrencyExchangeSerivce } from './currency-exchange.service';

describe('ApiService', () => {
  let service: CurrencyExchangeSerivce;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyExchangeSerivce);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
