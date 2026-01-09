import React from 'react';

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const AmountInput: React.FC<AmountInputProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Allow numbers, decimal point, and empty string
    if (inputValue === '' || /^\d*\.?\d*$/.test(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <div className="flex flex-col">
      <label className="text-[16px] font-semibold text-black mb-2">Amount</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[16px] font-semibold text-black"
        placeholder="0.00"
      />
    </div>
  );
};

