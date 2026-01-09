import swapIcon from '../assets/icons/icon-lg.svg';

interface SwapButtonProps {
  onClick: () => void;
}

export const SwapButton: React.FC<SwapButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-12 h-12 rounded-full bg-transparent border-2 border-blue-500 hover:border-blue-600 flex items-center justify-center transition-colors duration-200 self-end"
      aria-label="Swap currencies"
    >
      <img src={swapIcon} alt="Swap currencies" className="w-5 h-5" />
    </button>
  );
};

