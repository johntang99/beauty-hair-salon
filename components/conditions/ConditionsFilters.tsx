'use client';

import { Search } from 'lucide-react';

interface ConditionsFiltersProps {
  categories: string[];
  activeCategory: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (query: string) => void;
}

export default function ConditionsFilters({
  categories,
  activeCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
}: ConditionsFiltersProps) {
  return (
    <div className="sticky top-[73px] z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {/* Search Box */}
        <div className="mb-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search symptoms or conditions..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent text-small"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          <button
            onClick={() => onCategoryChange('All')}
            className={`px-4 py-2 rounded-lg text-small font-medium whitespace-nowrap transition-colors ${
              activeCategory === 'All'
                ? 'bg-[var(--brand)] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Conditions
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-lg text-small font-medium whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? 'bg-[var(--brand)] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
