export interface CurrencyRate {
  date: string;
  base: string;
  rates: Record<string, number>;
}

export interface Currency {
  code: string;
  name: string;
  symbol?: string;
}

export interface ConversionResult {
  from: string;
  to: string;
  amount: number;
  convertedAmount: number;
  rate: number;
  inverseRate: number;
  date: string;
}



