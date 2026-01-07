import axios from 'axios';
import { CurrencyRate } from '../types/currency';

const API_BASE_URL = 'https://api.vatcomply.com';

export const currencyApi = {
  async getRates(base: string = 'EUR', symbols?: string[]): Promise<CurrencyRate> {
    try {
      const symbolsParam = symbols ? `&symbols=${symbols.join(',')}` : '';
      const response = await axios.get<CurrencyRate>(
        `${API_BASE_URL}/rates?base=${base}${symbolsParam}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      throw error;
    }
  },

  async getHistoricalRates(date: string, base: string = 'EUR'): Promise<CurrencyRate> {
    try {
      const response = await axios.get<CurrencyRate>(
        `${API_BASE_URL}/rates?date=${date}&base=${base}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching historical rates:', error);
      throw error;
    }
  },
};

