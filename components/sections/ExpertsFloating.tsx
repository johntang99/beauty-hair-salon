'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import DraggableCircle from '@/components/creative/DraggableCircle';

// TypeScript interface for BAAM Studio integration
export interface Expert {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio?: string;
  yearsExperience?: number;
  specialties?: string[];
  position?: {
    top: string;
    left: string;
    rotation: number;
  };
}

export interface ExpertsFloatingProps {
  // Content
  label?: string;
  heading: string;
  subtitle?: string;
  experts: Expert[];
  
  // Styling
  backgroundColor?: string;
  labelColor?: string;
  headingColor?: string;
  
  // Configuration
  isEditMode?: boolean;
  enableDragDrop?: boolean;
  showTooltips?: boolean;
  containerHeight?: string;
  
  // BAAM Studio config
  sectionId?: string;
}

export default function ExpertsFloating({
  label = '👥 OUR EXPERTS',
  heading = 'Meet Our Team',
  subtitle = 'Passionate professionals dedicated to your success',
  experts,
  backgroundColor = '#ffffff',
  labelColor = 'var(--primary)',
  headingColor = '#111827',
  isEditMode = false,
  enableDragDrop = false,
  showTooltips = true,
  containerHeight = '600px',
  sectionId = 'experts-floating',
}: ExpertsFloatingProps) {
  // Default positions if not provided
  const defaultPositions = [
    { top: '10%', left: '10%', rotation: -8 },
    { top: '15%', left: '45%', rotation: 5 },
    { top: '10%', left: '75%', rotation: -12 },
    { top: '55%', left: '20%', rotation: 10 },
    { top: '50%', left: '60%', rotation: -6 },
    { top: '70%', left: '75%', rotation: 8 },
    { top: '75%', left: '35%', rotation: -10 },
    { top: '30%', left: '30%', rotation: 12 },
  ];

  // Circle sizes (can be randomized or configured)
  const circleSizes = [
    'w-48 h-48',
    'w-56 h-56',
    'w-44 h-44',
    'w-52 h-52',
    'w-48 h-48',
    'w-40 h-40',
    'w-50 h-50',
    'w-46 h-46',
  ];

  const [positions, setPositions] = useState<any[]>([]);

  useEffect(() => {
    // Load saved positions from localStorage if available
    const storageKey = `baam-${sectionId}-positions`;
    const saved = localStorage.getItem(storageKey);
    
    if (saved && enableDragDrop) {
      try {
        setPositions(JSON.parse(saved));
      } catch (e) {
        initializePositions();
      }
    } else {
      initializePositions();
    }
  }, [experts, sectionId, enableDragDrop]);

  const initializePositions = () => {
    const initialPositions = experts.map((expert, idx) => ({
      id: expert.id,
      top: expert.position?.top || defaultPositions[idx]?.top || '10%',
      left: expert.position?.left || defaultPositions[idx]?.left || '10%',
      rotation: expert.position?.rotation ?? defaultPositions[idx]?.rotation ?? 0,
      size: circleSizes[idx] || 'w-48 h-48',
    }));
    setPositions(initialPositions);
  };

  const handlePositionChange = (id: string, top: string, left: string, rotation: number) => {
    const updated = positions.map(pos => 
      pos.id === id ? { ...pos, top, left, rotation } : pos
    );
    setPositions(updated);
    
    // Auto-save to localStorage
    if (enableDragDrop) {
      const storageKey = `baam-${sectionId}-positions`;
      localStorage.setItem(storageKey, JSON.stringify(updated));
    }
  };

  const exportPositions = () => {
    const formatted = positions.map(p => ({
      id: p.id,
      top: p.top,
      left: p.left,
      rotation: p.rotation,
    }));
    
    navigator.clipboard.writeText(JSON.stringify(formatted, null, 2));
    alert('✅ Positions copied to clipboard!\n\nPaste this into BAAM Studio section config.');
  };

  const resetPositions = () => {
    if (confirm('Reset to default positions?')) {
      const storageKey = `baam-${sectionId}-positions`;
      localStorage.removeItem(storageKey);
      initializePositions();
    }
  };

  return (
    <section 
      className="py-24 px-4 relative overflow-hidden" 
      style={{ backgroundColor }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span 
            className="inline-block px-4 py-2 rounded-full text-small font-semibold mb-4"
            style={{ 
              backgroundColor: `${labelColor}15`,
              color: labelColor,
            }}
          >
            {label}
          </span>
          <h2 className="text-heading mb-4" style={{ color: headingColor }}>
            {heading}
          </h2>
          {subtitle && (
            <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Edit Mode Controls */}
        {isEditMode && enableDragDrop && (
          <div className="mb-8 p-4 bg-purple-100 border-2 border-purple-300 rounded-xl flex items-center justify-between">
            <div>
              <p className="font-bold text-purple-900">Edit Mode: Drag circles to reposition</p>
              <p className="text-small text-purple-700">Hover over circles for rotate controls</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={resetPositions}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-semibold text-small"
              >
                Reset
              </button>
              <button
                onClick={exportPositions}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold text-small"
              >
                Export Positions
              </button>
            </div>
          </div>
        )}

        {/* Floating Circles Container */}
        <div 
          className="relative mb-12 draggable-container" 
          style={{ height: containerHeight }}
        >
          {experts.map((expert, idx) => {
            const pos = positions[idx];
            if (!pos) return null;

            return enableDragDrop ? (
              <DraggableCircle
                key={expert.id}
                id={expert.id}
                src={expert.photo}
                alt={expert.name}
                initialTop={pos.top}
                initialLeft={pos.left}
                initialRotation={pos.rotation}
                size={pos.size}
                isEditMode={isEditMode}
                onPositionChange={handlePositionChange}
              >
                {/* Tooltip */}
                {showTooltips && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap"
                    style={{ transform: 'translateX(-50%) rotate(0deg)' }}
                  >
                    <h4 className="font-bold text-gray-900">{expert.name}</h4>
                    <p className="text-small text-[var(--primary)]">{expert.title}</p>
                    {expert.yearsExperience && (
                      <p className="text-small text-gray-600 mt-1">{expert.yearsExperience} years</p>
                    )}
                  </div>
                )}
              </DraggableCircle>
            ) : (
              /* Static (non-draggable) version */
              <div
                key={expert.id}
                className="absolute group cursor-pointer"
                style={{
                  top: pos.top,
                  left: pos.left,
                  transform: `rotate(${pos.rotation}deg)`,
                }}
              >
                <div className={`${pos.size} rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-110 transition-transform relative`}>
                  <Image
                    src={expert.photo}
                    alt={expert.name}
                    fill
                    className="object-cover"
                    sizes="224px"
                  />
                </div>
                
                {/* Tooltip */}
                {showTooltips && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap"
                    style={{ transform: 'translateX(-50%) rotate(0deg)' }}
                  >
                    <h4 className="font-bold text-gray-900">{expert.name}</h4>
                    <p className="text-small text-[var(--primary)]">{expert.title}</p>
                    {expert.yearsExperience && (
                      <p className="text-small text-gray-600 mt-1">{expert.yearsExperience} years</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA (if needed) */}
        <div className="text-center">
          <p className="text-small text-gray-600">
            Hover over team members to see their details
          </p>
        </div>
      </div>
    </section>
  );
}

// Export configuration schema for BAAM Studio
export const ExpertsFloatingConfig = {
  sectionType: 'experts',
  variant: 'floating',
  displayName: 'Floating Circles',
  description: 'Creative irregular layout with floating team member photos',
  previewImage: '/variants/experts-floating-preview.jpg',
  
  // Configuration options for BAAM Studio UI
  options: {
    label: {
      type: 'text',
      label: 'Section Label',
      default: '👥 OUR EXPERTS',
    },
    heading: {
      type: 'text',
      label: 'Heading',
      default: 'Meet Our Team',
      required: true,
    },
    subtitle: {
      type: 'text',
      label: 'Subtitle',
      default: 'Passionate professionals dedicated to your success',
    },
    containerHeight: {
      type: 'select',
      label: 'Container Height',
      options: ['500px', '600px', '700px', '800px'],
      default: '600px',
    },
    showTooltips: {
      type: 'boolean',
      label: 'Show Name Tooltips on Hover',
      default: true,
    },
    enableDragDrop: {
      type: 'boolean',
      label: 'Enable Drag & Drop Editing',
      default: false,
      adminOnly: true, // Only show in edit mode
    },
  },
  
  // For database storage
  schema: {
    layout_variant: 'floating',
    creative_config: {
      container_height: '600px',
      show_tooltips: true,
      enable_drag_drop: false,
      positions: [
        { expert_id: '1', top: '10%', left: '10%', rotation: -8 },
        // ... more positions
      ],
    },
  },
};
