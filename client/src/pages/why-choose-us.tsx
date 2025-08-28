import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CreditCard, Star, Shield, Rocket, Clock, Users, Award, Heart, ArrowRight } from "lucide-react";
import SupportImage from "@assets/Support.jpg"
import ReviewPhoto from "@assets/BOSTUBS.png";

export default function WhyChooseUs() {
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
      {/* Why Choose Us Hero */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6" data-testid="text-why-hero-title">
              Why Choose BYB Digital?
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-testid="text-why-hero-subtitle">
              We combine affordability, professionalism, and trust to deliver exceptional results for growing businesses
            </p>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center fade-in" data-testid="card-benefit-affordable">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CreditCard className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-grey-dark mb-4" data-testid="text-benefit-title-affordable">Affordable Pricing</h3>
              <p className="text-grey-text leading-relaxed" data-testid="text-benefit-desc-affordable">
                Quality websites that don't break the bank. We offer transparent pricing with no hidden fees.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center fade-in" data-testid="card-benefit-quality">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-grey-dark mb-4" data-testid="text-benefit-title-quality">Professional Quality</h3>
              <p className="text-grey-text leading-relaxed" data-testid="text-benefit-desc-quality">
                Every website is crafted with attention to detail and modern design principles.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center fade-in" data-testid="card-benefit-trusted">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-grey-dark mb-4" data-testid="text-benefit-title-trusted">Trusted Partner</h3>
              <p className="text-grey-text leading-relaxed" data-testid="text-benefit-desc-trusted">
                Build long-term relationships with reliable service and ongoing support.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center fade-in" data-testid="card-benefit-fast">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-grey-dark mb-4" data-testid="text-benefit-title-fast">Fast Turnaround</h3>
              <p className="text-grey-text leading-relaxed" data-testid="text-benefit-desc-fast">
                Quick turnaround times without compromising on quality or attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="py-20 bg-grey-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-grey-dark mb-6" data-testid="text-detailed-benefits-title">
              What Sets Us Apart
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-grey-dark mb-2" data-testid="text-detailed-benefit-title-turnaround">Fast Turnaround</h4>
                  <p className="text-grey-text" data-testid="text-detailed-benefit-desc-turnaround">
                    Most projects completed within 1-2 weeks. We understand that time is money for small businesses.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-grey-dark mb-2" data-testid="text-detailed-benefit-title-dedicated">Dedicated Support</h4>
                  <p className="text-grey-text" data-testid="text-detailed-benefit-desc-dedicated">
                    Personal attention and direct communication throughout your project and beyond.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-grey-dark mb-2" data-testid="text-detailed-benefit-title-proven">Proven Results</h4>
                  <p className="text-grey-text" data-testid="text-detailed-benefit-desc-proven">
                    Track record of helping businesses increase their online presence and customer engagement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-grey-dark mb-2" data-testid="text-detailed-benefit-title-passion">Passion for Growing Business</h4>
                  <p className="text-grey-text" data-testid="text-detailed-benefit-desc-passion">
                    We genuinely care about helping growing businesses succeed and excel in the digital world.
                  </p>
                </div>
              </div>
            </div>

            <div className="fade-in">
              <img 
                src={SupportImage}
                alt="Team collaboration and success" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="img-team-collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-grey-light rounded-3xl p-8 lg:p-12 fade-in">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src={ReviewPhoto} 
                  alt="Professional headshot of satisfied business owner" 
                  className="w-full h-full object-cover"
                  data-testid="img-testimonial-photo-why"
                />
              </div>
              <blockquote className="text-xl lg:text-2xl text-grey-dark font-medium mb-6 max-w-4xl mx-auto" data-testid="text-testimonial-quote-why">
                "BYB Digital transformed our online presence completely. Our new website not only looks professional but builds trust with our users. The BYB team was responsive, professional, and delivered exactly what we needed. Visit our website to experience the work done by BYB!"
              </blockquote>
              <div className="text-primary font-semibold" data-testid="text-testimonial-name-why">BosTubs</div>
              <div className="text-grey-text" data-testid="text-testimonial-title-why">www.Bostubs.co.za</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-cta-title">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8" data-testid="text-cta-subtitle">
              Join the number of growing businesses that trust BYB Digital for their online success.
            </p>
            <Link href="/contact" data-testid="link-cta-contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200">
                Start Your Project Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
