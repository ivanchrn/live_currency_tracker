export interface CurrencyExchange {
        ticker: string,
        bid: string,
        ask: string,
        open: string,
        low: string,
        high: string,
        changes: number,
        date: string
}

export interface CurrencyExchangeList {
    forexList: CurrencyExchange[]
}