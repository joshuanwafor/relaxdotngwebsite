'use client';

import { useState } from 'react';

export default function DeleteMyDataPage() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    reason: '',
    confirmDeletion: false,
    confirmDataLoss: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const deletionSteps = [
    {
      title: 'Request Submission',
      description: 'Submit your data deletion request through our secure form with identity verification',
      icon: '🔐',
      color: 'blue',
    },
    {
      title: 'Identity Verification',
      description: 'We verify your identity using email, phone, and account details for security',
      icon: '✅',
      color: 'teal',
    },
    {
      title: 'Account Closure',
      description: 'Your Relax.ng account and service history are permanently closed',
      icon: '👤',
      color: 'orange',
    },
    {
      title: 'Data Removal',
      description: 'All personal, service, and booking data is permanently deleted',
      icon: '🗑️',
      color: 'red',
    },
    {
      title: 'Confirmation',
      description: 'You receive confirmation once deletion is complete',
      icon: '✉️',
      color: 'green',
    },
  ];

  const dataCategories = [
    {
      title: 'Personal Information',
      description: 'Name, email, phone, address, preferences',
      icon: '👤',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Service Data',
      description: 'Booking history, service preferences, delivery addresses',
      icon: '🏠',
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Payment Information',
      description: 'Payment methods, transaction history, billing details',
      icon: '💳',
      color: 'bg-violet-100 text-violet-600',
    },
    {
      title: 'Photos & Images',
      description: 'Profile pictures, service documentation, before/after photos',
      icon: '📸',
      color: 'bg-cyan-100 text-cyan-600',
    },
    {
      title: 'Provider Information',
      description: 'Service provider ratings, feedback, communication history',
      icon: '⭐',
      color: 'bg-grape-100 text-grape-600',
    },
    {
      title: 'App Data',
      description: 'Usage analytics, device information, app preferences',
      icon: '📱',
      color: 'bg-indigo-100 text-indigo-600',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/20 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">
              Request Submitted Successfully
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Your data deletion request has been submitted and is being processed. We'll send you a confirmation email within 24 hours.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="font-semibold text-blue-900 mb-3">What happens next?</h3>
              <ul className="text-blue-800 space-y-2 text-left">
                <li>• We'll verify your identity within 24 hours</li>
                <li>• Data deletion will begin within 48 hours</li>
                <li>• You'll receive updates via email</li>
                <li>• Process completion: 7-14 business days</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/20 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">
            Request Data Deletion
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Permanently delete your Relax.ng account and all associated data
          </p>
          <div className="inline-flex items-center bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mt-6">
            🔒 Privacy & Security
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Process Steps */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <h2 className="font-headline text-3xl font-bold text-primary mb-6">
                  Data Deletion Process
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We take your privacy seriously. Follow these steps to permanently delete your Relax.ng account and all associated data.
                </p>

                <div className="space-y-6">
                  {deletionSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                        index === 0 ? 'bg-blue-100 text-blue-600' : 
                        index === 1 ? 'bg-teal-100 text-teal-600' :
                        index === 2 ? 'bg-orange-100 text-orange-600' :
                        index === 3 ? 'bg-red-100 text-red-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900">{step.title}</h3>
                          {index === 0 && (
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Alert */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-900 mb-3">Important: Permanent Action</h3>
                    <ul className="space-y-2 text-red-800">
                      <li>• This process typically takes 7-14 days to complete</li>
                      <li>• Some financial data may be retained for regulatory compliance (3 years)</li>
                      <li>• Account deletion is permanent and cannot be undone</li>
                      <li>• All service bookings and preferences will be deleted</li>
                      <li>• You will lose access to all Relax.ng services immediately</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Deletion Form */}
              <div className="bg-gradient-to-r from-gray-50 to-red-50 border border-red-200 rounded-2xl p-8">
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                  Submit Deletion Request
                </h3>
                <p className="text-gray-600 mb-8">
                  Please fill out the form below to submit your data deletion request. We will verify your 
                  identity using your email and phone number before processing the request.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        placeholder="your.email@example.com"
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
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                      Reason for Deletion (Optional)
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      rows={4}
                      value={formData.reason}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      placeholder="Help us improve by sharing your reason for leaving..."
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="confirmDeletion"
                        name="confirmDeletion"
                        required
                        checked={formData.confirmDeletion}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                      />
                      <label htmlFor="confirmDeletion" className="text-sm text-gray-700">
                        I confirm that I want to permanently delete my Relax.ng account and all associated data.
                      </label>
                    </div>
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="confirmDataLoss"
                        name="confirmDataLoss"
                        required
                        checked={formData.confirmDataLoss}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                      />
                      <label htmlFor="confirmDataLoss" className="text-sm text-gray-700">
                        I understand that this action is irreversible and I will lose all my data and service history.
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.confirmDeletion || !formData.confirmDataLoss}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Submit Deletion Request
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Data Categories */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="font-headline text-xl font-bold text-primary mb-6">
                  Data Categories to be Deleted
                </h3>
                <div className="space-y-4">
                  {dataCategories.map((category) => (
                    <div key={category.title} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white transition-colors">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm ${category.color}`}>
                        {category.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{category.title}</h4>
                        <p className="text-xs text-gray-600">{category.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Help Card */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="font-headline text-xl font-bold text-primary mb-4">
                  Need Help?
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  If you have questions about the data deletion process or need assistance, our support team is here to help.
                </p>
                <div className="space-y-3">
                  <a 
                    href="/contact"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg text-center transition-colors"
                  >
                    Contact Support
                  </a>
                  <a 
                    href="/faq"
                    className="block w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-4 rounded-lg text-center border border-gray-300 transition-colors"
                  >
                    View FAQ
                  </a>
                </div>
              </div>

              {/* Legal Requirements */}
              <div className="bg-gradient-to-r from-gray-50 to-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="font-headline text-xl font-bold text-primary mb-4">
                  Legal Requirements
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Some data may be retained for legal and regulatory purposes:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Financial transaction records (3 years)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Service verification records (2 years)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Compliance documentation (5 years)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}