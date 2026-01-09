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
      <header className="bg-[#0E1342] text-white px-14 py-3">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[22px] font-semibold">Currency exchange</h1>
        </div>
      </header>

      {/* Main Title Section */}
      <div className="bg-blue-500 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] font-bold text-center leading-tight">
            {title}
          </h2>
        </div>
      </div>

      {/* Converter Card */}
      <div className="max-w-6xl mx-[77px] -mt-8">
        <div className="bg-white rounded-lg shadow-lg pt-[32px] pl-[42px] pr-[18px] pb-[12px] h-[402px] flex flex-col relative">
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end pr-[42px]">
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
            <div className="md:col-span-1 flex justify-center">
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
      </div>
    </div>
  );
}

export default App;

// Se carga currency de manera estatica para evitar demoras en el select
// ya que el listado de monedas no cambia frecuentemente
