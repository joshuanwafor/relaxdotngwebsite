export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/20 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">
            About Relax.ng
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're on a mission to transform how Nigerians experience daily life by making essential services accessible, reliable, and stress-free.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We take the stress out of daily living by delivering fast, reliable lifestyle services that help Nigerians save time and live with peace of mind.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From laundry pickup to home cleaning, from home essentials to personal care services, we connect you with trusted professionals who understand your needs and respect your values.
              </p>
            </div>
            <div className="bg-secondary/20 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🌿</div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Peace of Mind</h3>
                <p className="text-gray-600">
                  Every service is designed to give you back your most precious resource: time to focus on what truly matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 lg:order-1">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Leading Innovation</h3>
                <p className="text-gray-600">
                  Setting the standard for modern convenience and trusted service delivery across Africa.
                </p>
              </div>
            </div>
            <div className="lg:order-2">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To be the most trusted lifestyle companion in Africa, redefining modern convenience with reliability, cultural respect, and innovation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where households and individuals across Africa live with more ease, freedom, and joy, supported by a network of trusted service professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Northern Nigeria First */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Northern Nigeria First?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Northern households and professionals face unique challenges — from trust in providers to reliable access to services. Relax.ng is built with these realities in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/5 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🗣️</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Hausa Language Support</h3>
              </div>
              <p className="text-gray-600">
                Our platform and service providers communicate in Hausa, ensuring clear understanding and comfortable interactions.
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🕌</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Cultural Sensitivity</h3>
              </div>
              <p className="text-gray-600">
                Halal options, prayer time considerations, and respect for local customs are built into every service.
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Local, Vetted Providers</h3>
              </div>
              <p className="text-gray-600">
                All service providers are from the local community, thoroughly vetted, and trained to our high standards.
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">💳</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Flexible Payments</h3>
              </div>
              <p className="text-gray-600">
                Secure, reliable payments with Cash on Delivery and Mobile Money options that work for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
              Our Values
            </h2>
            <p className="text-xl opacity-90">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Trust</h3>
              <p className="opacity-90">
                Building lasting relationships through transparency, reliability, and consistent quality service delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Respect</h3>
              <p className="opacity-90">
                Honoring cultural values, individual preferences, and treating every customer and provider with dignity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="opacity-90">
                Continuously improving our services and exceeding expectations in every interaction and delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our waitlist and be among the first to experience stress-free living with Relax.ng
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
