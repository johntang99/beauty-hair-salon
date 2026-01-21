import type { BlogPost } from '@/lib/blog';
import Link from 'next/link';
import Chip from '@/components/ui/Chip';
import { Clock, User, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  post: BlogPost;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-[var(--brand)] hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      {/* Featured Image */}
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/9] bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-600/10 to-amber-600/10">
            <div className="text-center">
              <div className="text-display mb-2 opacity-30">📖</div>
              <p className="text-smallall text-gray-500">Featured image</p>
            </div>
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
          {/* Replace with actual image:
          <Image
            src={post.featuredImage || '/images/blog/default.jpg'}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          */}
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <Chip variant="secondary" size="sm">{post.category}</Chip>
          <span className="text-smallall text-gray-500">{formatDate(post.date)}</span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-subheading font-bold text-gray-900 mb-3 group-hover:text-[var(--brand)] transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="text-small text-gray-600 mb-4 line-clamp-3 leading-relaxed flex-1">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {post.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-smallall rounded">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4 text-smallall text-gray-500">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {post.author}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            )}
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-[var(--brand)] hover:text-[var(--brand-2)] font-semibold text-small group-hover:gap-2 transition-all"
          >
            Read <ArrowRight className="w-4 h-4" />
          </Link>
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
