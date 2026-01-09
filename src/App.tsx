import { useState } from 'react';
import { AmountInput } from './components/AmountInput';
import { CurrencySelect } from './components/CurrencySelect';
import { SwapButton } from './components/SwapButton';
import { ConversionResult } from './components/ConversionResult';
import { useCurrencyConverter } from './hooks/useCurrencyConverter';
import { currencies } from './data/currencies';

function App() {
  const [amount, setAmount] = useState('1.00');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');

  const { result, loading, error } = useCurrencyConverter(amount, from, to);

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const fromCurrency = currencies.find((c) => c.code === from);
  const toCurrency = currencies.find((c) => c.code === to);

  const title = `${amount} ${from} to ${to} - Convert ${fromCurrency?.name}s to ${toCurrency?.name}s`;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="relative z-10 bg-[#0E1342] text-white px-4 md:px-14 py-3 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[22px] font-semibold">Currency exchange</h1>
        </div>
      </header>

      {/* Title and Card Section */}
      <div className="relative">
        {/* Blue Background - Absolute layer */}
        <div className="absolute top-0 left-0 right-0 h-[295px] bg-blue-500"></div>
        
        {/* Title */}
        <div className="relative px-4 pt-[32px] md:pt-[62px]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[32px] font-bold text-center leading-tight text-white">
              {title}
            </h2>
          </div>
        </div>

        {/* Converter Card  */}
        <div className="relative max-w-6xl mx-8 md:mx-[77px] mt-[32px] md:mt-[62px]">
        <div className="bg-white rounded-lg shadow-lg px-4 py-6 md:pt-[32px] md:pl-[42px] md:pr-[18px] md:pb-[12px] min-h-[300px] md:h-[402px] flex flex-col relative">
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end md:pr-[42px]">
            <div className="md:col-span-1">
              <AmountInput value={amount} onChange={setAmount} />
            </div>
            <div className="md:col-span-1">
              <CurrencySelect
                value={from}
                onChange={setFrom}
                currencies={currencies}
                label="From"
              />
            </div>
            <div className="md:col-span-1 flex justify-start md:justify-center">
              <SwapButton onClick={handleSwap} />
            </div>
            <div className="md:col-span-1">
              <CurrencySelect
                value={to}
                onChange={setTo}
                currencies={currencies}
                label="To"
              />
            </div>
          </div>

          {/* Conversion Result */}
          <ConversionResult result={result} loading={loading} error={error} />
        </div>
        
        {/* Date text - Mobile only */}
        {result && (
          <div className="md:hidden mt-4 mb-4 px-4">
            <p className="text-[12px] font-light text-black text-center">
              {currencies.find((c) => c.code === from)?.name} to {currencies.find((c) => c.code === to)?.name} conversion — Last updated{' '}
              {new Date(result.date).toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short',
              })}
            </p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default App;

// Se carga currency de manera estatica para evitar demoras en el select
// ya que el listado de monedas no cambia frecuentemente
