'use client';

import { useState } from 'react';
import HomeRegular from './page-regular-content';
import HomeCreative from './page-creative-content';
import HomeCreativeEditable from './page-creative-editable';
import { Palette, Grid3x3, ArrowLeftRight, Edit3 } from 'lucide-react';

export default function Home() {
  const [layout, setLayout] = useState<'regular' | 'creative' | 'editable'>('creative');

  return (
    <>
      {/* Layout Switcher - Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
          <div className="p-2 bg-gradient-to-r from-pink-50 to-purple-50 border-b border-gray-200">
            <div className="flex items-center gap-2 px-3 py-1">
              <ArrowLeftRight className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-small font-bold text-gray-700">Layout Style</span>
            </div>
          </div>
          <div className="p-2 flex flex-col gap-2">
            <button
              onClick={() => setLayout('regular')}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-small transition-all ${
                layout === 'regular'
                  ? 'bg-[var(--primary)] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
              Regular
            </button>
            <button
              onClick={() => setLayout('creative')}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-small transition-all ${
                layout === 'creative'
                  ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Palette className="w-4 h-4" />
              Creative
            </button>
            <button
              onClick={() => setLayout('editable')}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-small transition-all ${
                layout === 'editable'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Edit3 className="w-4 h-4" />
              Edit Mode
            </button>
          </div>
        </div>
      </div>

      {/* Render selected layout */}
      {layout === 'regular' && <HomeRegular />}
      {layout === 'creative' && <HomeCreative />}
      {layout === 'editable' && <HomeCreativeEditable />}
    </>
  );
}
