'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual contact form submission
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/20 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:hello@relax.ng" className="hover:text-primary transition-colors">
                        hello@relax.ng
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Website</h3>
                    <p className="text-gray-600">
                      <a href="http://www.relax.ng" className="hover:text-primary transition-colors">
                        www.relax.ng
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Visit for the latest updates
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Service Area</h3>
                    <p className="text-gray-600">Northern Nigeria</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Starting with pilot city, expanding soon
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-12 p-6 bg-secondary/20 rounded-2xl">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Support Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  All times are West Africa Time (WAT)
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-8">
                Send Us a Message
              </h2>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Services Information</option>
                      <option value="provider">Provider Application</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
                  >
                    Send Message →
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-2xl font-semibold text-green-800 mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
            Looking for Quick Answers?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Check out our FAQ section for answers to common questions about our services, safety, and more.
          </p>
          <a 
            href="/faq"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-block"
          >
            View FAQ →
          </a>
        </div>
      </section>

      {/* Join Waitlist CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Relax.ng?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our waitlist and be the first to know when we launch in your area
          </p>
          <a 
            href="/#waitlist"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-block"
          >
            Join the Waitlist →
          </a>
        </div>
      </section>
    </div>
  );
}
