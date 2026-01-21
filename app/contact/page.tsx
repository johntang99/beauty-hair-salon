"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted - would send to backend");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-display font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-center text-subheading text-gray-600 mb-12">Schedule your appointment or ask us a question</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-subheading font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 font-semibold">Name</label>
                <input type="text" required className="w-full p-3 border rounded" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input type="email" required className="w-full p-3 border rounded" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Phone</label>
                <input type="tel" className="w-full p-3 border rounded" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea required className="w-full p-3 border rounded h-32"></textarea>
              </div>
              <button type="submit" className="w-full bg-[var(--primary)] text-white py-3 rounded-lg hover:bg-[var(--primary-dark)] font-semibold">
                Send Message
              </button>
              {submitted && (
                <div className="bg-[var(--primary-50)] border border-green-500 text-[var(--primary)] p-4 rounded">
                  Thank you! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>

          <div>
            <h2 className="text-subheading font-bold mb-6">Visit Us</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-gray-700">71 East Main Street</p>
                <p className="text-gray-700">Middletown, NY 10940</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Phone</h3>
                <a href="tel:845-381-1106" className="text-[var(--primary)] hover:text-[var(--primary)] text-subheading font-semibold">
                  845-381-1106
                </a>
              </div>
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <a href="mailto:sancai.acu@gmail.com" className="text-[var(--primary)] hover:text-[var(--primary)]">
                  sancai.acu@gmail.com
                </a>
              </div>
              <div>
                <h3 className="font-bold mb-2">Hours</h3>
                <p className="text-gray-700">Monday - Thursday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8904729614547!2d-74.42323!3d41.4459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI2JzQ1LjIiTiA3NMKwMjUnMjMuNiJX!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
