import React from 'react';
import { TrendingUp, Menu, Search, Bell, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">StockAnalytica</span>
            </div>
            <nav className="hidden md:flex space-x-8 ml-10">
              <a href="#" className="text-blue-600 font-medium">Dashboard</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Stocks</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">News</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Research</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search stocks..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Bell className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
            <User className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
            <Menu className="md:hidden w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;