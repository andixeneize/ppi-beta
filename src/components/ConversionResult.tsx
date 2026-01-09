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
      <>
        {/* Skeleton for conversion result */}
        <div className="flex-1 flex items-center mt-6 md:mt-0">
          <div className="space-y-2">
            <div className="h-[24px] md:h-[32px] bg-gray-200 rounded w-48 animate-pulse"></div>
            <div className="h-[24px] md:h-[32px] bg-gray-200 rounded w-64 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-56 animate-pulse mt-3"></div>
          </div>
        </div>
        {/* Skeleton for disclaimer */}
        <div className="hidden md:flex md:absolute md:bottom-[12px] md:right-[18px] md:flex-col md:items-end">
          <div className="bg-[#E8F3FF] rounded-[8px] pt-[14px] pr-[17px] pb-[14px] pl-[31px] w-[518px]">
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
            </div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-72 animate-pulse mt-3"></div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
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
    <>
      {/* Conversion Result Block */}
      <div className="flex-1 flex items-center mt-6 md:mt-0">
        <div>
          <p className="text-[24px] md:text-[32px] leading-[36px] font-semibold text-gray-900">
            {result.amount.toFixed(2)} {fromCurrency?.name} =<br />
            {result.convertedAmount.toFixed(8)} {toCurrency?.name}
          </p>
          <p className="text-[16px] text-[#757575] mt-3">
            1 {result.to} = {result.inverseRate.toFixed(8)} {result.from}
          </p>
        </div>
      </div>
      
      {/* Disclaimer Block - Desktop only */}
      <div className="hidden md:flex md:absolute md:bottom-[12px] md:right-[18px] md:flex-col md:items-end">
        <div className="bg-[#E8F3FF] rounded-[8px] pt-[14px] pr-[17px] pb-[14px] pl-[31px] w-[518px]">
          <p className="text-[14px] font-normal text-black ">
            We use the mid-market rate for our Converter. This is for informational purposes only.
            You won't receive this rate when sending money.
          </p>
        </div>
        <p className="text-[12px] font-light text-black mt-3 text-right">
          {fromCurrency?.name} to {toCurrency?.name} conversion — Last updated{' '}
          {formatDate(result.date)}
        </p>
      </div>
    </>
  );
};

// Se decidio implementer un esqueleto en el loader para reservar el
// espacio del bloque mientras carga y evitar un cambio de tamaño
