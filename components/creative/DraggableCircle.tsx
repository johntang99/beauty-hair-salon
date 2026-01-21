'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface DraggableCircleProps {
  id: string;
  src: string;
  alt: string;
  initialTop: string;
  initialLeft: string;
  initialRotation: number;
  size: string; // e.g., 'w-48 h-48'
  zIndex?: number;
  isEditMode: boolean;
  onPositionChange?: (id: string, top: string, left: string, rotation: number) => void;
  children?: React.ReactNode; // For hover tooltip
}

export default function DraggableCircle({
  id,
  src,
  alt,
  initialTop,
  initialLeft,
  initialRotation,
  size,
  zIndex = 10,
  isEditMode,
  onPositionChange,
  children,
}: DraggableCircleProps) {
  const [position, setPosition] = useState({ top: initialTop, left: initialLeft });
  const [rotation, setRotation] = useState(initialRotation);
  const [isDragging, setIsDragging] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Find the container on mount
    if (circleRef.current) {
      containerRef.current = circleRef.current.closest('.draggable-container') as HTMLDivElement;
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isEditMode || !containerRef.current) return;
    
    e.preventDefault();
    setIsDragging(true);

    const container = containerRef.current.getBoundingClientRect();
    const circle = circleRef.current?.getBoundingClientRect();
    if (!circle) return;

    const offsetX = e.clientX - circle.left;
    const offsetY = e.clientY - circle.top;

    const handleMouseMove = (e: MouseEvent) => {
      const newLeft = ((e.clientX - container.left - offsetX) / container.width) * 100;
      const newTop = ((e.clientY - container.top - offsetY) / container.height) * 100;

      // Clamp values between 0 and 100
      const clampedLeft = Math.max(0, Math.min(100, newLeft));
      const clampedTop = Math.max(0, Math.min(100, newTop));

      setPosition({
        left: `${clampedLeft}%`,
        top: `${clampedTop}%`,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      
      if (onPositionChange) {
        onPositionChange(id, position.top, position.left, rotation);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleRotate = (direction: 'left' | 'right') => {
    const newRotation = direction === 'left' ? rotation - 15 : rotation + 15;
    setRotation(newRotation);
    if (onPositionChange) {
      onPositionChange(id, position.top, position.left, newRotation);
    }
  };

  return (
    <div
      ref={circleRef}
      className={`absolute group ${isEditMode ? 'cursor-move' : 'cursor-pointer'}`}
      style={{
        top: position.top,
        left: position.left,
        transform: `rotate(${rotation}deg)`,
        zIndex: isDragging ? 1000 : zIndex,
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Edit Mode Controls */}
      {isEditMode && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-small flex gap-2 items-center opacity-0 group-hover:opacity-100 transition-opacity z-50">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleRotate('left');
            }}
            className="hover:text-pink-300 transition-colors"
          >
            ↺
          </button>
          <span className="text-xs">Drag to move</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleRotate('right');
            }}
            className="hover:text-pink-300 transition-colors"
          >
            ↻
          </button>
        </div>
      )}

      {/* Circle with Image */}
      <div 
        className={`${size} rounded-full overflow-hidden border-4 border-white shadow-2xl transition-all ${
          isEditMode 
            ? 'ring-4 ring-pink-500/50 ring-offset-2' 
            : 'hover:scale-110'
        } ${isDragging ? 'scale-110 shadow-3xl' : ''}`}
        style={{ transform: 'rotate(0deg)' }}
      >
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="256px"
            draggable={false}
          />
        </div>
      </div>

      {/* Hover Tooltip (only in non-edit mode) */}
      {!isEditMode && children}
    </div>
  );
}
