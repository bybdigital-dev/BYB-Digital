import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Code,
  Headphones,
  Check,
  ArrowRight,
  MapPin,
  Megaphone,
  Mail,
  Share2,
} from "lucide-react";

export default function Services() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach((el) => {
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
            <h1
              className="text-5xl sm:text-6xl font-bold mb-6"
              data-testid="text-services-hero-title"
            >
              Our Services
            </h1>
            <p
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              data-testid="text-services-hero-subtitle"
            >
              Comprehensive digital solutions designed to help your business
              thrive online
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-grey-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Card 1 */}
            <div
              className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 fade-in"
              data-testid="card-service-website-design"
            >
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3
                className="text-2xl font-bold text-grey-dark mb-4"
                data-testid="text-service-title-website"
              >
                Website Design & Development
              </h3>
              <p
                className="text-grey-text mb-6 leading-relaxed"
                data-testid="text-service-desc-website"
              >
                Modern, responsive websites that look professional and convert
                visitors into customers. Built with the latest technologies and
                optimized for performance.
              </p>
              <ul className="space-y-2 text-sm text-grey-text mb-6">
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-website-custom"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Custom Design
                </li>

                <li
                  className="flex items-center"
                  data-testid="text-service-feature-website-domain"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Includes domain registration
                </li>

                <li
                  className="flex items-center"
                  data-testid="text-service-feature-website-responsive"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Mobile Responsive
                </li>

                <li
                  className="flex items-center"
                  data-testid="text-service-feature-website-quality"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Professional Quality
                </li>

                <li
                  className="flex items-center"
                  data-testid="text-service-feature-website-affordable"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Affordable Pricing
                </li>

                <li
                  className="flex items-center"
                  data-testid="text-service-feature-website-turnaround"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Fast Turnaround
                </li>
              </ul>
              <div
                className="text-2xl font-bold text-primary mb-2"
                data-testid="text-service-price-website"
              ></div>
              <div
                className="text-sm text-grey-text"
                data-testid="text-service-timeline-website"
              >
                1-2 week delivery
              </div>
            </div>

            {/* NEW: Google Business Profile Setup */}
            <div
              className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 fade-in"
              data-testid="card-service-google-business"
            >
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3
                className="text-2xl font-bold text-grey-dark mb-4"
                data-testid="text-service-title-google-business"
              >
                Google Business Profile Setup
              </h3>
              <p
                className="text-grey-text mb-6 leading-relaxed"
                data-testid="text-service-desc-google-business"
              >
                Get found on Google Search and Maps with a properly set up
                business profile, optimized details, and a professional presence
                from day one.
              </p>
              <ul className="space-y-2 text-sm text-grey-text mb-6">
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-gbp-setup"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Full profile setup & optimisation
                </li>
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-gbp-categories"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Categories, services & keywords
                </li>
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-gbp-hours"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Hours, contact info & location
                </li>
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-gbp-guidance"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Verification guidance (if needed)
                </li>
              </ul>
              <div
                className="text-2xl font-bold text-primary mb-2"
                data-testid="text-service-price-google-business"
              ></div>
              <div
                className="text-sm text-grey-text"
                data-testid="text-service-timeline-google-business"
              >
                2-4 day delivery
              </div>
            </div>

            {/* NEW: Google Ads Management */}
            <div
              className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 fade-in"
              data-testid="card-service-google-ads"
            >
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-6">
                <Megaphone className="w-8 h-8 text-primary" />
              </div>
              <h3
                className="text-2xl font-bold text-grey-dark mb-4"
                data-testid="text-service-title-google-ads"
              >
                Google Ads Management
              </h3>
              <p
                className="text-grey-text mb-6 leading-relaxed"
                data-testid="text-service-desc-google-ads"
              >
                Performance-focused Google Ads setup and management to drive
                calls, leads, and sales — with tracking in place so you know
                what’s working.
              </p>
              <ul className="space-y-2 text-sm text-grey-text mb-6">
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-ads-structure"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Campaign & ad group structure
                </li>
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-ads-keywords"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Keyword research & targeting
                </li>
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-ads-tracking"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Conversion tracking setup
                </li>
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-ads-optimisation"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Ongoing optimisation & reporting
                </li>
              </ul>
              <div
                className="text-2xl font-bold text-primary mb-2"
                data-testid="text-service-price-google-ads"
              ></div>
              <div
                className="text-sm text-grey-text"
                data-testid="text-service-timeline-google-ads"
              >
                Setup in 3-5 days, then monthly management
              </div>
            </div>

            {/* NEW: Custom Email Domain Setup */}
            <div
              className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 fade-in"
              data-testid="card-service-email-domain"
            >
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3
                className="text-2xl font-bold text-grey-dark mb-4"
                data-testid="text-service-title-email-domain"
              >
                Custom Email Domain Setup
              </h3>
              <p
                className="text-grey-text mb-6 leading-relaxed"
                data-testid="text-service-desc-email-domain"
              >
                Look professional with email addresses like{" "}
                <span className="font-semibold">you@yourcompany.co.za</span>.
                We’ll set up your domain email properly and securely.
              </p>
              <ul className="space-y-2 text-sm text-grey-text mb-6">
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-email-dns"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  DNS setup (MX, SPF, DKIM, DMARC)
                </li>
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-email-accounts"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Mailboxes & aliases setup
                </li>
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-email-devices"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Phone/desktop configuration help
                </li>
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-email-deliverability"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Deliverability & security best practice
                </li>
              </ul>
              <div
                className="text-2xl font-bold text-primary mb-2"
                data-testid="text-service-price-email-domain"
              ></div>
              <div
                className="text-sm text-grey-text"
                data-testid="text-service-timeline-email-domain"
              >
                1-2 day delivery
              </div>
            </div>

            {/* NEW: Social Media Management */}
            <div
              className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 fade-in"
              data-testid="card-service-social-media"
            >
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-6">
                <Share2 className="w-8 h-8 text-primary" />
              </div>
              <h3
                className="text-2xl font-bold text-grey-dark mb-4"
                data-testid="text-service-title-social-media"
              >
                Social Media Management
              </h3>
              <p
                className="text-grey-text mb-6 leading-relaxed"
                data-testid="text-service-desc-social-media"
              >
                Consistent, professional social content that matches your brand
                and builds trust over time — without you having to think about
                it every week.
              </p>
              <ul className="space-y-2 text-sm text-grey-text mb-6">
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-social-strategy"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Content plan & posting schedule
                </li>
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-social-creative"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Post designs & captions
                </li>
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-social-branding"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Brand consistency across platforms
                </li>
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-social-reports"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Monthly insights & improvements
                </li>
              </ul>
              <div
                className="text-2xl font-bold text-primary mb-2"
                data-testid="text-service-price-social-media"
              ></div>
              <div
                className="text-sm text-grey-text"
                data-testid="text-service-timeline-social-media"
              >
                Month-to-month service
              </div>
            </div>

            {/* Service Card 2 
            <div className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 fade-in" data-testid="card-service-branding">
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-grey-dark mb-4" data-testid="text-service-title-branding">Domain registration</h3>
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
            </div>*/}

            {/* Service Card 3 
            <div className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 fade-in" data-testid="card-service-hosting">
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-grey-dark mb-4" data-testid="text-service-title-hosting">Website Hosting</h3>
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
            </div>*/}

            {/* Service Card 4 */}
            <div
              className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 fade-in"
              data-testid="card-service-support"
            >
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <h3
                className="text-2xl font-bold text-grey-dark mb-4"
                data-testid="text-service-title-support"
              >
                Hosting & Digital Support
              </h3>
              <p
                className="text-grey-text mb-6 leading-relaxed"
                data-testid="text-service-desc-support"
              >
                Keep your digital presence running smoothly with secure hosting
                and ongoing support — all in one affordable monthly package.
              </p>
              <ul className="space-y-2 text-sm text-grey-text mb-6">
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-support-hosting"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Reliable Website Hosting
                </li>
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-support-updates"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Content and/or Image Updates (Up to 3 per month)
                </li>
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-support-speeds"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Fast Loading Speeds
                </li>
                <li
                  className="flex items-center"
                  data-testid="text-service-feature-support-technical"
                >
                  <Check className="w-4 h-4 text-primary mr-2" />
                  Technical Support
                </li>
              </ul>
              <div
                className="text-2xl font-bold text-primary mb-2"
                data-testid="text-service-price-support"
              ></div>
              <div
                className="text-sm text-grey-text"
                data-testid="text-service-timeline-support"
              >
                Month-to-month service
              </div>
            </div>
          </div>

          <div className="text-center mt-12 fade-in">
            <Link href="/contact" data-testid="link-services-quote">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
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
            <h2
              className="text-4xl sm:text-5xl font-bold text-grey-dark mb-6"
              data-testid="text-process-title"
            >
              Our Process
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p
              className="text-xl text-grey-text max-w-3xl mx-auto"
              data-testid="text-process-subtitle"
            >
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3
                className="text-xl font-bold text-grey-dark mb-3"
                data-testid="text-process-step-1-title"
              >
                Discovery
              </h3>
              <p className="text-grey-text" data-testid="text-process-step-1-desc">
                We learn about your business, goals, and target audience
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3
                className="text-xl font-bold text-grey-dark mb-3"
                data-testid="text-process-step-2-title"
              >
                Design
              </h3>
              <p className="text-grey-text" data-testid="text-process-step-2-desc">
                Create mockups and designs that reflect your brand
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3
                className="text-xl font-bold text-grey-dark mb-3"
                data-testid="text-process-step-3-title"
              >
                Development
              </h3>
              <p className="text-grey-text" data-testid="text-process-step-3-desc">
                Build your website with modern technologies
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3
                className="text-xl font-bold text-grey-dark mb-3"
                data-testid="text-process-step-4-title"
              >
                Launch
              </h3>
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