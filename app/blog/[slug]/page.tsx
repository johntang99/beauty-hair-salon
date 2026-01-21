import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllBlogSlugs, getBlogPostBySlug } from '@/lib/blog';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Dr Huang Clinic Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="py-16 px-4">
      <article className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-[var(--primary)] hover:text-[var(--primary)] font-semibold inline-flex items-center gap-2 mb-6"
          >
            ← Back to Blog
          </Link>
        </div>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[var(--primary-50)] text-[var(--primary)] text-small font-semibold rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500">{formatDate(post.date)}</span>
          </div>
          <h1 className="text-display font-bold mb-4 text-gray-900">{post.title}</h1>
          <p className="text-subheading text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-2 text-gray-600">
            <span>By {post.author}</span>
          </div>
        </header>

        <MedicalDisclaimer variant="blog" className="mb-8" />

        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">{post.content}</div>
        </div>

        <footer className="border-t-2 border-gray-200 pt-8">
          <div className="bg-[var(--primary-50)] p-8 rounded-xl text-center">
            <h3 className="text-subheading font-bold mb-4">Interested in Learning More?</h3>
            <p className="text-gray-700 mb-6">
              Schedule a consultation to discuss how Traditional Chinese Medicine can support your health journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[var(--primary)] text-white px-8 py-3 rounded-lg hover:bg-[var(--primary-dark)] font-semibold"
              >
                Book Appointment
              </a>
              <a
                href="/services"
                className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-3 rounded-lg hover:bg-[var(--primary-50)] font-semibold"
              >
                View Services
              </a>
            </div>
          </div>
        </footer>

        <div className="mt-12">
          <h3 className="text-subheading font-bold mb-6">More Articles</h3>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-block bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 font-semibold"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </article>
    </main>
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
