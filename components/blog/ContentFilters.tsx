'use client';

import { FileText, Video } from 'lucide-react';

interface ContentFiltersProps {
  categories: string[];
  activeCategory: string;
  activeType: 'all' | 'article' | 'video';
  onCategoryChange: (category: string) => void;
  onTypeChange: (type: 'all' | 'article' | 'video') => void;
  articleCount: number;
  videoCount: number;
}

export default function ContentFilters({
  categories,
  activeCategory,
  activeType,
  onCategoryChange,
  onTypeChange,
  articleCount,
  videoCount,
}: ContentFiltersProps) {
  return (
    <div className="sticky top-[73px] z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {/* Type Filters */}
        <div className="mb-4 flex justify-center gap-3">
          <button
            onClick={() => onTypeChange('all')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-small font-semibold transition-colors ${
              activeType === 'all'
                ? 'bg-[var(--brand)] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Content ({articleCount + videoCount})
          </button>
          <button
            onClick={() => onTypeChange('article')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-small font-semibold transition-colors ${
              activeType === 'article'
                ? 'bg-[var(--brand)] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            Articles ({articleCount})
          </button>
          <button
            onClick={() => onTypeChange('video')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-small font-semibold transition-colors ${
              activeType === 'video'
                ? 'bg-[var(--brand)] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Video className="w-4 h-4" />
            Videos ({videoCount})
          </button>
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
            All Topics
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
