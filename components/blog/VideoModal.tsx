'use client';

import Modal from '@/components/ui/Modal';
import type { BlogPost } from '@/lib/blog';
import { ExternalLink } from 'lucide-react';

interface VideoModalProps {
  video: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  if (!video) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={video.title}>
      <div className="p-6">
        {/* Video Embed */}
        <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
          {video.videoUrl ? (
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center text-white">
                <div className="text-display mb-4">🎬</div>
                <p className="text-subheading">Video will be embedded here</p>
              </div>
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[var(--secondary-50)] text-[var(--secondary)] text-small font-semibold rounded-full">
              {video.category}
            </span>
            <span className="text-small text-gray-500">{formatDate(video.date)}</span>
            {video.videoDuration && (
              <span className="text-small text-gray-500">• {video.videoDuration}</span>
            )}
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            {video.excerpt}
          </p>

          {/* Tags */}
          {video.tags && video.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {video.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 text-smallall rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Watch on Platform Link */}
          {video.videoUrl && (
            <div className="pt-4 border-t border-gray-200">
              <a
                href={video.videoUrl.replace('/embed/', '/watch?v=')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--brand)] hover:text-[var(--brand-2)] font-semibold text-small"
              >
                <ExternalLink className="w-4 h-4" />
                Watch on YouTube
              </a>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
