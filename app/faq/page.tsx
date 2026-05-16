'use client';

import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "What services does Relax.ng offer?",
    answer: "We provide lifestyle essentials such as laundry pickup and delivery, professional home cleaning, and everyday household services. Our goal is to handle the time-consuming tasks so you can focus on what matters most to you."
  },
  {
    id: 2,
    question: "Is it safe to use Relax.ng?",
    answer: "Yes — all providers are vetted, trained, and tracked. We prioritize your safety with strict standards including background checks, professional training, and real-time service tracking. Your security and peace of mind are our top priorities."
  },
  {
    id: 3,
    question: "Do you support Cash on Delivery?",
    answer: "Absolutely. We support both Cash on Delivery and Mobile Money for seamless payments. You can choose the payment method that works best for you, ensuring convenience and security."
  },
  {
    id: 4,
    question: "Where is Relax.ng available?",
    answer: "We're starting with a pilot city in Northern Nigeria, then expanding to other urban centers. Join our waitlist to be notified when we launch in your area."
  },
  {
    id: 5,
    question: "How do you ensure cultural sensitivity?",
    answer: "Our platform is built with Northern Nigerian culture in mind. We provide Hausa language support, respect prayer times, offer Halal options where applicable, and train all providers on cultural sensitivity and local customs."
  },
  {
    id: 6,
    question: "How much do your services cost?",
    answer: "Our pricing is transparent and competitive. Costs vary by service type and requirements, but we always provide upfront pricing with no hidden fees. You'll know exactly what you're paying before booking any service."
  },
  {
    id: 7,
    question: "How do I book a service?",
    answer: "Once we launch, you'll be able to book services through our mobile app or website. Simply select your service, choose your preferred time, and we'll match you with a qualified provider in your area."
  },
  {
    id: 8,
    question: "What if I'm not satisfied with a service?",
    answer: "Your satisfaction is guaranteed. If you're not happy with any service, we'll work to make it right. This may include re-doing the service at no charge or providing a full refund, depending on the situation."
  },
  {
    id: 9,
    question: "How do you vet your service providers?",
    answer: "All providers go through a comprehensive vetting process including background checks, reference verification, skills assessment, and cultural sensitivity training. We only work with professionals who meet our high standards."
  },
  {
    id: 10,
    question: "Can I schedule recurring services?",
    answer: "Yes! Once we launch, you'll be able to set up recurring services like weekly laundry pickup or regular home cleaning. This makes it even easier to maintain a stress-free lifestyle."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/20 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about Relax.ng services, safety, and how we work.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-primary pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openItems.includes(faq.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openItems.includes(faq.id) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We'd love to hear from you. Get in touch and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="mailto:hello@relax.ng"
              className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Join Waitlist CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our waitlist and be among the first to experience the convenience of Relax.ng
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
