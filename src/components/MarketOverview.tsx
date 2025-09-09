import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';

const MarketOverview: React.FC = () => {
  const marketStats = [
    {
      title: 'S&P 500',
      value: '4,567.23',
      change: '+24.67',
      changePercent: '+0.54%',
      isPositive: true,
      icon: TrendingUp
    },
    {
      title: 'NASDAQ',
      value: '14,123.45',
      change: '-12.34',
      changePercent: '-0.087%',
      isPositive: false,
      icon: TrendingDown
    },
    {
      title: 'DOW JONES',
      value: '33,892.11',
      change: '+156.78',
      changePercent: '+0.46%',
      isPositive: true,
      icon: Activity
    },
    {
      title: 'VIX',
      value: '16.23',
      change: '-0.89',
      changePercent: '-5.20%',
      isPositive: true,
      icon: DollarSign
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {marketStats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
              <IconComponent className={`w-5 h-5 ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`} />
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <div className="flex items-center space-x-1">
                <span className={`text-sm font-medium ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
                <span className={`text-sm ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  ({stat.changePercent})
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MarketOverview;