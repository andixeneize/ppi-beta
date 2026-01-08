import { useState, useEffect, useCallback } from 'react';
import { currencyApi } from '../services/currencyApi';
import { ConversionResult } from '../types/currency';

export const useCurrencyConverter = (
  amount: string,
  from: string,
  to: string
) => {
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const convert = useCallback(async () => {
    if (!amount || parseFloat(amount) <= 0 || from === to) {
      setResult(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const ratesData = await currencyApi.getRates(from, [to]);
      const rate = ratesData.rates[to];

      if (!rate) {
        throw new Error(`Exchange rate for ${to} not found`);
      }

      const amountNum = parseFloat(amount);
      const convertedAmount = amountNum * rate;
      const inverseRate = 1 / rate;

      setResult({
        from,
        to,
        amount: amountNum,
        convertedAmount,
        rate,
        inverseRate,
        date: ratesData.date,
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to fetch exchange rate. Please try again.'
      );
      setResult(null);
    } finally {
      setLoading(false);
    }
  }, [amount, from, to]);

  useEffect(() => {
    const timer = setTimeout(() => {
      convert();
    }, 300); // Debounce API calls

    return () => clearTimeout(timer);
  }, [convert]);

  return { result, loading, error, convert };
};



