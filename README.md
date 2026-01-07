# ppi-beta
Prototipo para ppi challenge

## Currency Exchange Website

A modern, responsive currency converter built with React, TypeScript, Vite, and Tailwind CSS.

### Features

- 💱 Real-time currency conversion using VATcomply API
- 🌍 Support for 20+ major currencies
- 📱 Fully responsive design (mobile & desktop)
- 🔄 Swap currencies functionality
- ⚡ Fast and lightweight
- 🎨 Clean and modern UI matching Figma design

### Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **VATcomply API** - Currency exchange rates

### Getting Started

#### Prerequisites

- Node.js 18+ 
- npm or yarn

#### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

#### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

#### Preview Production Build

```bash
npm run preview
```

### Project Structure

```
ppi-beta/
├── src/
│   ├── components/          # React components
│   │   ├── AmountInput.tsx
│   │   ├── CurrencySelect.tsx
│   │   ├── SwapButton.tsx
│   │   └── ConversionResult.tsx
│   ├── services/            # API services
│   │   └── currencyApi.ts
│   ├── hooks/               # Custom React hooks
│   │   └── useCurrencyConverter.ts
│   ├── types/               # TypeScript types
│   │   └── currency.ts
│   ├── data/                # Static data
│   │   └── currencies.ts
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
└── package.json
```

### API

This project uses the [VATcomply API](https://www.vatcomply.com) for currency exchange rates. The API provides:

- Latest exchange rates from the European Central Bank
- Historical exchange rates
- Support for multiple base currencies
- Free tier with 2 requests per second

### License

MIT