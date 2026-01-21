'use client';

import { useState, useMemo } from 'react';
import { blogPosts, getAllCategories, getFeaturedPosts } from '@/lib/blog';
import type { BlogPost } from '@/lib/blog';
import BlogHero from '@/components/blog/BlogHero';
import ContentFilters from '@/components/blog/ContentFilters';
import FeaturedContent from '@/components/blog/FeaturedContent';
import ArticleCard from '@/components/blog/ArticleCard';
import VideoCard from '@/components/blog/VideoCard';
import VideoModal from '@/components/blog/VideoModal';
import Link from 'next/link';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeType, setActiveType] = useState<'all' | 'article' | 'video'>('all');
  const [selectedVideo, setSelectedVideo] = useState<BlogPost | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const categories = getAllCategories();
  const featuredPosts = getFeaturedPosts();
  const featuredPost = featuredPosts[0];

  // Count articles and videos
  const articleCount = blogPosts.filter((p) => p.type === 'article').length;
  const videoCount = blogPosts.filter((p) => p.type === 'video').length;

  // Filter posts
  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter((post) => {
        // Category filter
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        
        // Type filter
        const matchesType = activeType === 'all' || post.type === activeType;

        // Exclude featured from grid
        const notFeatured = !post.featured;

        return matchesCategory && matchesType && notFeatured;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [activeCategory, activeType]);

  const handlePlayVideo = (video: BlogPost) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false);
    setTimeout(() => setSelectedVideo(null), 200);
  };

  return (
    <main>
      {/* Hero Section */}
      <BlogHero />

      {/* Educational Disclaimer */}
      <section className="py-6 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[var(--secondary-50)] border-l-4 border-amber-500 p-4 rounded-r-lg">
            <p className="text-small text-gray-700">
              <strong className="font-semibold">Educational Content:</strong> The information on this blog is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a licensed healthcare provider before starting any new treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      {featuredPost && (
        <FeaturedContent
          post={featuredPost}
          onPlayVideo={featuredPost.type === 'video' ? () => handlePlayVideo(featuredPost) : undefined}
        />
      )}

      {/* Content Filters (Sticky) */}
      <ContentFilters
        categories={categories}
        activeCategory={activeCategory}
        activeType={activeType}
        onCategoryChange={setActiveCategory}
        onTypeChange={setActiveType}
        articleCount={articleCount}
        videoCount={videoCount}
      />

      {/* Content Grid */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl">
          {filteredPosts.length > 0 ? (
            <>
              <div className="mb-8 text-center">
                <p className="text-small text-gray-600">
                  Showing <span className="font-semibold text-gray-900">{filteredPosts.length}</span> {activeType === 'all' ? 'items' : activeType === 'article' ? 'articles' : 'videos'}
                  {activeCategory !== 'All' && ` in ${activeCategory}`}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) =>
                  post.type === 'video' ? (
                    <VideoCard key={post.slug} post={post} onPlay={() => handlePlayVideo(post)} />
                  ) : (
                    <ArticleCard key={post.slug} post={post} />
                  )
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-display mb-4">🔍</div>
              <h3 className="text-subheading font-bold text-gray-900 mb-2">No content found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setActiveType('all');
                }}
                className="px-6 py-3 bg-[var(--brand)] text-white rounded-lg hover:bg-[var(--brand-2)] font-semibold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-heading mb-4">
            Have Questions About TCM?
          </h2>
          <p className="text-subheading mb-10 leading-relaxed max-w-3xl mx-auto text-white/95">
            Schedule a consultation to discuss your health concerns and learn how Traditional Chinese Medicine can help you achieve your wellness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[var(--primary)] px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold text-subheading transition-all shadow-lg"
            >
              Book Appointment
            </Link>
            <Link
              href="/new-patients"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 font-semibold text-subheading transition-all"
            >
              New Patient Info
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        video={selectedVideo}
        isOpen={isVideoModalOpen}
        onClose={handleCloseVideoModal}
      />
    </main>
  );
}
