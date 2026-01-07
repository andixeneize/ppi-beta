import React from 'react';
import { ConversionResult as ConversionResultType } from '../types/currency';
import { currencies } from '../data/currencies';

interface ConversionResultProps {
  result: ConversionResultType | null;
  loading: boolean;
  error: string | null;
}

export const ConversionResult: React.FC<ConversionResultProps> = ({
  result,
  loading,
  error,
}) => {
  if (loading) {
    return (
      <div className="mt-6 text-center">
        <p className="text-gray-500">Loading exchange rate...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  const fromCurrency = currencies.find((c) => c.code === result.from);
  const toCurrency = currencies.find((c) => c.code === result.to);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    });
  };

  return (
    <div className="mt-8 space-y-4">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex-1">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">{result.amount.toFixed(2)}</span>{' '}
            {fromCurrency?.name} =
          </p>
          <p className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            {result.convertedAmount.toFixed(8)} {toCurrency?.name}
          </p>
          <p className="text-sm text-gray-500 mt-3">
            1 {result.to} = {result.inverseRate.toFixed(8)} {result.from}
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md">
          <p className="text-sm text-blue-900 leading-relaxed">
            We use the mid-market rate for our Converter. This is for informational purposes only.
            You won't receive this rate when sending money.
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        {fromCurrency?.name} to {toCurrency?.name} conversion — Last updated{' '}
        {formatDate(result.date)}
      </p>
    </div>
  );
};

