import type { BlogPost } from '@/lib/blog';
import Image from 'next/image';
import Chip from '@/components/ui/Chip';
import { Play, Clock, User } from 'lucide-react';

interface VideoCardProps {
  post: BlogPost;
  onPlay: () => void;
}

export default function VideoCard({ post, onPlay }: VideoCardProps) {
  return (
    <article className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-[var(--brand)] hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      {/* Video Thumbnail with Play Button */}
      <button onClick={onPlay} className="block relative">
        <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
          {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
              <div className="text-center">
                <div className="text-display mb-2 opacity-30">🎬</div>
                <p className="text-small text-gray-500">Video thumbnail</p>
              </div>
            </div>
          )}
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-[var(--brand)] group-hover:bg-[var(--brand-2)] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
              <Play className="w-10 h-10 text-white ml-1" fill="white" />
            </div>
          </div>

          {/* Duration Badge */}
          {post.videoDuration && (
            <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-small font-semibold">
              {post.videoDuration}
            </div>
          )}

          {/* Video Badge */}
          <div className="absolute top-3 left-3">
            <Chip variant="primary" size="sm">
              VIDEO
            </Chip>
          </div>
        </div>
      </button>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <Chip variant="secondary" size="sm">{post.category}</Chip>
          <span className="text-small text-gray-500">{formatDate(post.date)}</span>
        </div>

        {/* Title */}
        <button onClick={onPlay} className="text-left">
          <h2 className="text-subheading font-bold text-gray-900 mb-3 group-hover:text-[var(--brand)] transition-colors line-clamp-2">
            {post.title}
          </h2>
        </button>

        {/* Excerpt */}
        <p className="text-small text-gray-600 mb-4 line-clamp-3 leading-relaxed flex-1">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {post.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-small rounded">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4 text-small text-gray-500">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {post.author}
            </span>
            {post.videoDuration && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.videoDuration}
              </span>
            )}
          </div>
          <button
            onClick={onPlay}
            className="flex items-center gap-1 text-[var(--brand)] hover:text-[var(--brand-2)] font-semibold text-small"
          >
            <Play className="w-3 h-3" />
            Watch
          </button>
        </div>
      </div>
    </article>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
