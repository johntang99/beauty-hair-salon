import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="antialiased">
        {/* Top Bar */}
        <div className="py-2 px-4 text-small" style={{ backgroundColor: 'var(--topbar-bg)', color: 'var(--topbar-text)' }}>
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex gap-6 items-center">
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address.street + ', ' + siteConfig.contact.address.city + ', ' + siteConfig.contact.address.state)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 hover:text-teal-100 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                {siteConfig.contact.address.street}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
              </a>
              <a 
                href={siteConfig.contact.phone.href}
                className="flex items-center gap-2 hover:text-teal-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.contact.phone.display}
              </a>
              <a 
                href={siteConfig.contact.email.href}
                className="hidden sm:flex items-center gap-2 hover:text-teal-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.contact.email.display}
              </a>
            </div>
            <div className="hidden md:block text-smallall">
              <span className="text-pink-100">✨ Accepting New Clients</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className="sticky top-0 z-50 border-b bg-[var(--surface)] backdrop-blur supports-[backdrop-filter]:bg-[color-mix(in_srgb,var(--surface)_86%,transparent)] shadow-[var(--shadow-sm)]">
          <nav className="container mx-auto px-6 py-5">
            <div className="flex justify-between items-center gap-8">
              <Link href="/" className="text-subheading font-bold text-[var(--brand-2)] hover:text-[var(--brand)] transition-colors whitespace-nowrap">
                {siteConfig.brand.name}
              </Link>
              <div className="hidden xl:flex gap-6 items-center flex-1 justify-center">
                {siteConfig.navigation.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[color-mix(in_srgb,var(--text)_72%,transparent)] hover:text-[var(--brand)] font-medium transition-colors whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="whitespace-nowrap">
                <Link
                  href="/book"
                  className="bg-[var(--brand)] text-white px-6 py-2.5 rounded-lg hover:bg-[var(--brand-2)] text-small font-semibold transition-colors shadow-[var(--shadow-sm)]"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <footer className="mt-16 border-t bg-slate-900 text-white py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-subheading mb-4 text-white">{siteConfig.brand.name}</h3>
                <p className="!text-slate-300 mb-4">{siteConfig.brand.tagline}</p>
                <p className="!text-slate-300 text-small">{siteConfig.brand.description}</p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2">
                  {siteConfig.navigation.footer.quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-slate-300 hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-white">Services</h4>
                <ul className="space-y-2">
                  {siteConfig.navigation.footer.services.map((service) => (
                    <li key={service.href}>
                      <Link href={service.href} className="text-slate-300 hover:text-white transition-colors">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-white">Contact</h4>
                <div className="space-y-3 text-small">
                  <p className="!text-slate-300">{siteConfig.contact.address.street}</p>
                  <p className="!text-slate-300">{siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}</p>
                  <a href={siteConfig.contact.phone.href} className="!text-slate-300 flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                    {siteConfig.contact.phone.display}
                  </a>
                  <a href={siteConfig.contact.email.href} className="!text-slate-300 flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                    {siteConfig.contact.email.display}
                  </a>
                  <div className="pt-3">
                    <h5 className="font-semibold text-white mb-2">Hours</h5>
                    {siteConfig.contact.hoursFormatted.map((hour, i) => (
                      <p key={i} className="text-smallall !text-slate-300">
                        {hour.days}: {hour.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-8 text-center text-small">
              <p className="!text-slate-300">&copy; {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
