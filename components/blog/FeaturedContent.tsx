import type { BlogPost } from '@/lib/blog';
import Link from 'next/link';
import Chip from '@/components/ui/Chip';
import { Clock, User, Play, ArrowRight } from 'lucide-react';

interface FeaturedContentProps {
  post: BlogPost;
  onPlayVideo?: () => void;
}

export default function FeaturedContent({ post, onPlayVideo }: FeaturedContentProps) {
  const isVideo = post.type === 'video';

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[var(--brand)] hover:shadow-2xl transition-all">
          <div className="grid lg:grid-cols-2">
            {/* Image/Video Side */}
            <div className="relative">
              {isVideo ? (
                <button onClick={onPlayVideo} className="block w-full h-full relative group/play">
                  <div className="aspect-[16/10] lg:aspect-auto lg:h-full bg-gradient-to-br from-green-600/10 to-amber-600/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-8xl mb-4 opacity-20">🎬</div>
                        <p className="text-gray-600">Featured Video</p>
                      </div>
                    </div>
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/play:bg-black/30 transition-all">
                      <div className="w-24 h-24 rounded-full bg-[var(--brand)] group-hover/play:bg-[var(--brand-2)] flex items-center justify-center shadow-2xl group-hover/play:scale-110 transition-all">
                        <Play className="w-12 h-12 text-white ml-1" fill="white" />
                      </div>
                    </div>
                    {post.videoDuration && (
                      <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded text-small font-semibold">
                        {post.videoDuration}
                      </div>
                    )}
                  </div>
                </button>
              ) : (
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="aspect-[16/10] lg:aspect-auto lg:h-full bg-gradient-to-br from-green-600/10 to-amber-600/10 relative overflow-hidden group/img">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-8xl mb-4 opacity-20">📰</div>
                        <p className="text-gray-600">Featured Article</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-all" />
                  </div>
                </Link>
              )}
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <Chip variant="primary" size="md">
                  ⭐ FEATURED {isVideo ? 'VIDEO' : 'ARTICLE'}
                </Chip>
              </div>

              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <Chip variant="secondary" size="sm">{post.category}</Chip>
                <span className="text-small text-gray-500">{formatDate(post.date)}</span>
              </div>

              <h2 className="text-heading text-gray-900 mb-4 leading-tight">
                {post.title}
              </h2>

              <p className="text-subheading text-gray-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white text-gray-700 text-smallall font-medium rounded-full border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Meta Info */}
              <div className="flex items-center gap-6 text-small text-gray-600 mb-6">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                {isVideo && post.videoDuration && (
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.videoDuration}
                  </span>
                )}
                {!isVideo && post.readTime && (
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                )}
              </div>

              {/* CTA Button */}
              {isVideo ? (
                <button
                  onClick={onPlayVideo}
                  className="inline-flex items-center gap-2 bg-[var(--brand)] text-white px-8 py-4 rounded-lg hover:bg-[var(--brand-2)] font-semibold text-subheading transition-all shadow-lg"
                >
                  <Play className="w-5 h-5" />
                  Watch Now
                </button>
              ) : (
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 bg-[var(--brand)] text-white px-8 py-4 rounded-lg hover:bg-[var(--brand-2)] font-semibold text-subheading transition-all shadow-lg"
                >
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
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
