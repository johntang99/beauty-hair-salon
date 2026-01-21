import type { Metadata } from 'next';
import Image from 'next/image';
import { products, skincareProducts, haircareProducts, makeupProducts, toolsProducts } from '@/lib/products';
import Link from 'next/link';
import { Star, ShoppingBag, Check, Sparkles, ArrowRight } from 'lucide-react';
import Chip from '@/components/ui/Chip';

export const metadata: Metadata = {
  title: 'Products | The Beauty Cares',
  description: 'Shop premium beauty and hair care products at The Beauty Cares. Professional-grade skincare, haircare, makeup, and beauty tools.',
};

export default function ProductsPage() {
  const categories = [
    { name: 'All Products', count: products.length, filter: 'all' },
    { name: 'Skincare', count: skincareProducts.length, filter: 'skincare' },
    { name: 'Haircare', count: haircareProducts.length, filter: 'haircare' },
    { name: 'Makeup', count: makeupProducts.length, filter: 'makeup' },
    { name: 'Tools', count: toolsProducts.length, filter: 'tools' },
  ];

  // Unsplash product photos
  const productPhotos: { [key: string]: string } = {
    'luxury-face-serum': 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80',
    'shampoo-conditioner-set': 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=600&q=80',
    'hair-styling-cream': 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=80',
    'organic-face-mask-set': 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
    'lash-growth-serum': 'https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=600&q=80',
    'hair-treatment-mask': 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80',
    'makeup-brush-set': 'https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=600&q=80',
    'skincare-starter-kit': 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80',
    'heat-protectant-spray': 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&q=80',
    'beauty-tool-set': 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=600&q=80',
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] via-[var(--backdrop-secondary)] to-[var(--backdrop-primary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-6">
            SHOP OUR PRODUCTS
          </span>
          <h1 className="text-display mb-6">
            Premium Beauty Products
          </h1>
          <p className="text-subheading text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Take the salon experience home with our curated collection of professional-grade beauty and hair care products. Each product is personally selected by our expert stylists.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex gap-4 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <a
                key={category.filter}
                href={`#${category.filter}`}
                className={`px-6 py-2 rounded-full font-semibold text-small whitespace-nowrap transition-all ${
                  category.filter === 'all'
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-12 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[var(--primary)] flex items-center justify-center text-3xl">
                ✨
              </div>
              <div>
                <h2 className="text-subheading font-bold text-gray-900 mb-1">
                  Professional Grade Products
                </h2>
                <p className="text-gray-600">
                  The same products our stylists use in the salon
                </p>
              </div>
            </div>
            <div className="flex gap-6 text-small">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[var(--primary)]" />
                <span>Salon Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[var(--primary)]" />
                <span>Expert Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[var(--primary)]" />
                <span>Premium Ingredients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="all" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all group"
              >
                {/* Product Image */}
                <div className="aspect-square relative overflow-hidden bg-white">
                  <Image
                    src={productPhotos[product.slug] || 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80'}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <Chip variant="secondary" size="sm">{product.category.toUpperCase()}</Chip>
                    {product.featured && (
                      <Chip variant="primary" size="sm">
                        <Star className="w-3 h-3 inline mr-1" fill="currentColor" />
                        FEATURED
                      </Chip>
                    )}
                  </div>

                  {/* Out of Stock */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="bg-white px-4 py-2 rounded-lg font-bold text-gray-900">
                        Out of Stock
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Brand */}
                  <p className="text-small text-[var(--primary)] font-semibold mb-2">
                    {product.brand}
                  </p>

                  {/* Product Name */}
                  <h3 className="text-body font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4"
                          style={{
                            fill: i < Math.floor(product.rating) ? 'var(--secondary)' : 'transparent',
                            color: 'var(--secondary)',
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-small text-gray-600">
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-small text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <span className="text-subheading font-bold text-[var(--primary)]">
                        ${product.price}
                      </span>
                      {product.salePrice && (
                        <span className="text-small text-gray-500 line-through ml-2">
                          ${product.salePrice}
                        </span>
                      )}
                      {product.size && (
                        <p className="text-small text-gray-500 mt-1">{product.size}</p>
                      )}
                    </div>
                    <button
                      className={`p-2 rounded-lg transition-all ${
                        product.inStock
                          ? 'bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={!product.inStock}
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>

                  {/* View Details Link */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="block mt-4 text-center text-small text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-heading mb-4">Why Shop Our Products?</h2>
            <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
              Quality products personally selected by our expert team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Salon Professional',
                description: 'The same high-quality products our stylists use every day in the salon.',
              },
              {
                icon: '✨',
                title: 'Expert Selected',
                description: 'Each product is personally tested and approved by our certified professionals.',
              },
              {
                icon: '💝',
                title: 'Personalized Advice',
                description: 'Not sure what to choose? Our team can recommend the perfect products for you.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-lg transition-all text-center"
              >
                <div className="text-display mb-4">{item.icon}</div>
                <h3 className="text-subheading font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Purchase */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-2xl p-8 md:p-12 border-2 border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-heading mb-4">How to Purchase</h2>
              <p className="text-subheading text-gray-600">
                Multiple ways to get your favorite products
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border-2 border-[var(--primary)]">
                <div className="text-display mb-3">🏪</div>
                <h3 className="text-subheading font-bold text-gray-900 mb-3">
                  Purchase at Salon
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Visit us during your next appointment or stop by anytime to browse our product selection and get personalized recommendations from our team.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold"
                >
                  Visit Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <div className="text-display mb-3">📞</div>
                <h3 className="text-subheading font-bold text-gray-900 mb-3">
                  Call to Order
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Call us to place an order for pickup or delivery. Our team can answer questions and help you choose the right products for your needs.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold"
                >
                  Call Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">
                <strong>Product Guarantee:</strong> Not satisfied? Return unused products within 30 days for a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-heading mb-4">
            Questions About Our Products?
          </h2>
          <p className="text-subheading mb-10 leading-relaxed max-w-3xl mx-auto text-white/95">
            Our expert team is here to help you choose the perfect products for your hair and skin. Book a consultation or visit us at the salon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-[var(--primary)] px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold text-subheading transition-all shadow-lg"
            >
              Book Consultation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 font-semibold text-subheading transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
