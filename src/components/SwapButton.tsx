import React from 'react';

interface SwapButtonProps {
  onClick: () => void;
}

export const SwapButton: React.FC<SwapButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors duration-200 self-end mb-2 shadow-md"
      aria-label="Swap currencies"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Circular swap arrows */}
        <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
      <span className="absolute text-[10px] font-bold leading-none">$</span>
    </button>
  );
};

