import React, { useState } from 'react';
import { ArrowUpDown, Filter, Download } from 'lucide-react';
import StockCard from './StockCard';

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  marketCap: string;
  score: number;
  recommendation: 'BUY' | 'HOLD' | 'SELL';
}

const stockData: Stock[] = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 178.25,
    change: 2.45,
    changePercent: 1.39,
    volume: '45.2M',
    marketCap: '$2.8T',
    score: 8.5,
    recommendation: 'BUY'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 334.89,
    change: -1.23,
    changePercent: -0.37,
    volume: '28.7M',
    marketCap: '$2.5T',
    score: 8.2,
    recommendation: 'BUY'
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 127.85,
    change: 3.67,
    changePercent: 2.95,
    volume: '31.4M',
    marketCap: '$1.6T',
    score: 7.8,
    recommendation: 'BUY'
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 142.35,
    change: 1.89,
    changePercent: 1.35,
    volume: '42.8M',
    marketCap: '$1.5T',
    score: 7.3,
    recommendation: 'BUY'
  },
  {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    price: 208.44,
    change: -5.67,
    changePercent: -2.65,
    volume: '89.3M',
    marketCap: '$663B',
    score: 6.1,
    recommendation: 'HOLD'
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    price: 445.67,
    change: 12.34,
    changePercent: 2.85,
    volume: '67.2M',
    marketCap: '$1.1T',
    score: 9.1,
    recommendation: 'BUY'
  },
  {
    symbol: 'META',
    name: 'Meta Platforms Inc.',
    price: 298.77,
    change: -2.45,
    changePercent: -0.81,
    volume: '25.6M',
    marketCap: '$763B',
    score: 7.4,
    recommendation: 'BUY'
  },
  {
    symbol: 'JPM',
    name: 'JPMorgan Chase & Co.',
    price: 154.23,
    change: 0.89,
    changePercent: 0.58,
    volume: '12.4M',
    marketCap: '$452B',
    score: 6.8,
    recommendation: 'HOLD'
  },
  {
    symbol: 'JNJ',
    name: 'Johnson & Johnson',
    price: 162.45,
    change: -0.67,
    changePercent: -0.41,
    volume: '8.9M',
    marketCap: '$428B',
    score: 6.2,
    recommendation: 'HOLD'
  },
  {
    symbol: 'V',
    name: 'Visa Inc.',
    price: 241.78,
    change: 1.56,
    changePercent: 0.65,
    volume: '6.7M',
    marketCap: '$520B',
    score: 8.0,
    recommendation: 'BUY'
  }
];

const StockTable: React.FC = () => {
  const [sortField, setSortField] = useState<keyof Stock>('score');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [filteredStocks, setFilteredStocks] = useState(stockData);

  const handleSort = (field: keyof Stock) => {
    const direction = sortField === field && sortDirection === 'desc' ? 'asc' : 'desc';
    setSortField(field);
    setSortDirection(direction);

    const sorted = [...filteredStocks].sort((a, b) => {
      if (direction === 'asc') {
        return a[field] > b[field] ? 1 : -1;
      }
      return a[field] < b[field] ? 1 : -1;
    });
    setFilteredStocks(sorted);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Top Performing Stocks</h2>
          <div className="flex items-center space-x-3">
            <button className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
              <Filter className="w-4 h-4 mr-1" />
              Filter
            </button>
            <button className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
              <Download className="w-4 h-4 mr-1" />
              Export
            </button>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('symbol')}
              >
                <div className="flex items-center">
                  Stock
                  <ArrowUpDown className="w-3 h-3 ml-1" />
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('price')}
              >
                <div className="flex items-center">
                  Price
                  <ArrowUpDown className="w-3 h-3 ml-1" />
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('change')}
              >
                <div className="flex items-center">
                  Change
                  <ArrowUpDown className="w-3 h-3 ml-1" />
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('changePercent')}
              >
                <div className="flex items-center">
                  Change %
                  <ArrowUpDown className="w-3 h-3 ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Volume
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Market Cap
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('score')}
              >
                <div className="flex items-center">
                  AI Score
                  <ArrowUpDown className="w-3 h-3 ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Recommendation
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStocks.map((stock) => (
              <StockCard key={stock.symbol} {...stock} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTable;