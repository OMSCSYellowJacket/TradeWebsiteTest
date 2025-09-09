import React from 'react';
import Header from './components/Header';
import MarketOverview from './components/MarketOverview';
import StockTable from './components/StockTable';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Market Dashboard</h1>
          <p className="text-gray-600">Real-time market data and AI-powered stock analysis</p>
        </div>
        
        <MarketOverview />
        <StockTable />
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Data updated every 15 minutes. Last update: {new Date().toLocaleTimeString()}</p>
        </div>
      </main>
    </div>
  );
}

export default App;