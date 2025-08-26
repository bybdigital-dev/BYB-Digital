import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Code, Palette, Headphones, Shield, Check, ArrowRight } from "lucide-react";

export default function Services() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Services Hero */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6" data-testid="text-services-hero-title">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-testid="text-services-hero-subtitle">
              Comprehensive digital solutions designed to help your business thrive online
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-grey-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 fade-in" data-testid="card-service-website-design">
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-grey-dark mb-4" data-testid="text-service-title-website">Website Design & Development</h3>
              <p className="text-grey-text mb-6 leading-relaxed" data-testid="text-service-desc-website">
                Modern, responsive websites that look professional and convert visitors into customers. Built with the latest technologies and optimized for performance.
              </p>
              <ul className="space-y-2 text-sm text-grey-text mb-6">
                <li className="flex items-center" data-testid="text-service-feature-custom">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Custom Design
                </li>
                <li className="flex items-center" data-testid="text-service-feature-responsive">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Mobile Responsive
                </li>
                <li className="flex items-center" data-testid="text-service-feature-seo">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  SEO Optimized
                </li>
                <li className="flex items-center" data-testid="text-service-feature-performance">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Fast Performance
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-2" data-testid="text-service-price-website">Starting at $1,299</div>
              <div className="text-sm text-grey-text" data-testid="text-service-timeline-website">2-4 week delivery</div>
            </div>

            {/* Service Card 2 */}
            <div className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 fade-in" data-testid="card-service-branding">
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-grey-dark mb-4" data-testid="text-service-title-branding">Digital Branding</h3>
              <p className="text-grey-text mb-6 leading-relaxed" data-testid="text-service-desc-branding">
                Create a memorable brand identity that resonates with your target audience. From logos to complete brand guidelines.
              </p>
              <ul className="space-y-2 text-sm text-grey-text mb-6">
                <li className="flex items-center" data-testid="text-service-feature-logo">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Logo Design
                </li>
                <li className="flex items-center" data-testid="text-service-feature-guidelines">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Brand Guidelines
                </li>
                <li className="flex items-center" data-testid="text-service-feature-materials">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Marketing Materials
                </li>
                <li className="flex items-center" data-testid="text-service-feature-colors">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Color Palette
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-2" data-testid="text-service-price-branding">Starting at $799</div>
              <div className="text-sm text-grey-text" data-testid="text-service-timeline-branding">1-2 week delivery</div>
            </div>

            {/* Service Card 3 */}
            <div className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 fade-in" data-testid="card-service-hosting">
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-grey-dark mb-4" data-testid="text-service-title-hosting">Hosting & SSL</h3>
              <p className="text-grey-text mb-6 leading-relaxed" data-testid="text-service-desc-hosting">
                Reliable monthly hosting packages with SSL certificates included. Keep your website secure and fast with our managed hosting.
              </p>
              <ul className="space-y-2 text-sm text-grey-text mb-6">
                <li className="flex items-center" data-testid="text-service-feature-ssl">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  SSL Certificate Included
                </li>
                <li className="flex items-center" data-testid="text-service-feature-reliable">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  99.9% Uptime Guarantee
                </li>
                <li className="flex items-center" data-testid="text-service-feature-backup">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Daily Backups
                </li>
                <li className="flex items-center" data-testid="text-service-feature-support">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  24/7 Support
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-2" data-testid="text-service-price-hosting">$29/month</div>
              <div className="text-sm text-grey-text" data-testid="text-service-timeline-hosting">Monthly hosting package</div>
            </div>

            {/* Service Card 4 */}
            <div className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 fade-in" data-testid="card-service-support">
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-grey-dark mb-4" data-testid="text-service-title-support">Ongoing Digital Support</h3>
              <p className="text-grey-text mb-6 leading-relaxed" data-testid="text-service-desc-support">
                Keep your digital presence running smoothly with our maintenance, updates, and technical support services.
              </p>
              <ul className="space-y-2 text-sm text-grey-text mb-6">
                <li className="flex items-center" data-testid="text-service-feature-updates">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Regular Updates
                </li>
                <li className="flex items-center" data-testid="text-service-feature-security">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Security Monitoring
                </li>
                <li className="flex items-center" data-testid="text-service-feature-technical">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Technical Support
                </li>
                <li className="flex items-center" data-testid="text-service-feature-content">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Content Updates
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-2" data-testid="text-service-price-support">$99/month</div>
              <div className="text-sm text-grey-text" data-testid="text-service-timeline-support">Ongoing monthly service</div>
            </div>
          </div>

          <div className="text-center mt-12 fade-in">
            <Link href="/contact" data-testid="link-services-quote">
              <Button size="lg" className="bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                Get Your Custom Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-grey-dark mb-6" data-testid="text-process-title">
              Our Process
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-grey-text max-w-3xl mx-auto" data-testid="text-process-subtitle">
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-grey-dark mb-3" data-testid="text-process-step-1-title">Discovery</h3>
              <p className="text-grey-text" data-testid="text-process-step-1-desc">
                We learn about your business, goals, and target audience
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-grey-dark mb-3" data-testid="text-process-step-2-title">Design</h3>
              <p className="text-grey-text" data-testid="text-process-step-2-desc">
                Create mockups and designs that reflect your brand
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-grey-dark mb-3" data-testid="text-process-step-3-title">Development</h3>
              <p className="text-grey-text" data-testid="text-process-step-3-desc">
                Build your website with modern technologies
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-grey-dark mb-3" data-testid="text-process-step-4-title">Launch</h3>
              <p className="text-grey-text" data-testid="text-process-step-4-desc">
                Go live and provide ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
