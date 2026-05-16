'use client';

import { useState } from 'react';

export default function Providers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    experience: '',
    location: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual provider application submission
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      experience: '',
      location: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
            Become a Relax.ng Provider
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Earn, Grow, and Make an Impact
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our network of trusted service professionals delivering essentials to households in Northern Nigeria.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Join Relax.ng?
            </h2>
            <p className="text-xl text-gray-600">
              Benefits that make a real difference in your professional life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/5 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Fair & Timely Pay</h3>
              </div>
              <p className="text-gray-600">
                Competitive compensation with Mobile Money and Cash on Delivery support. Get paid promptly for your quality work.
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">⏰</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Flexible Schedule</h3>
              </div>
              <p className="text-gray-600">
                Work when you want, how you want. Set your own hours and choose the jobs that fit your lifestyle.
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Training & Support</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive training programs and ongoing safety support to help you deliver excellent service.
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">More Customers</h3>
              </div>
              <p className="text-gray-600">
                Access to a growing customer base without the stress of finding jobs. We connect you with people who need your services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Need */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
              Services We're Looking For
            </h2>
            <p className="text-xl text-gray-600">
              Professional opportunities across multiple service categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🧺</div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Laundry Services</h3>
              <p className="text-gray-600 mb-4">
                Pickup, cleaning, and delivery of clothing and household items.
              </p>
              <ul className="text-sm text-gray-500 text-left space-y-1">
                <li>• Washing & folding</li>
                <li>• Dry cleaning</li>
                <li>• Ironing services</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🧹</div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Cleaning Services</h3>
              <p className="text-gray-600 mb-4">
                Professional home and office cleaning for busy households.
              </p>
              <ul className="text-sm text-gray-500 text-left space-y-1">
                <li>• Deep cleaning</li>
                <li>• Regular maintenance</li>
                <li>• Post-construction cleanup</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Home Services</h3>
              <p className="text-gray-600 mb-4">
                Essential household maintenance and delivery services.
              </p>
              <ul className="text-sm text-gray-500 text-left space-y-1">
                <li>• Cleaning services</li>
                <li>• Grocery delivery</li>
                <li>• Basic maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
              Apply as a Provider
            </h2>
            <p className="text-xl text-gray-600">
              Ready to join our network? Fill out the form below to get started.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-secondary/20 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="laundry">Laundry Services</option>
                    <option value="cleaning">Cleaning Services</option>
                    <option value="home">Home Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Location/City *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Kano, Kaduna, Zaria"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">Less than 1 year</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">More than 5 years</option>
                  </select>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
                >
                  Apply as a Provider →
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Application Submitted!
              </h3>
              <p className="text-green-700">
                Thank you for your interest in joining Relax.ng. Our team will review your application and get back to you within 2-3 business days.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
