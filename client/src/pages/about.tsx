import { useEffect } from "react";
import { Users, Heart, Target, Award } from "lucide-react";
import TrustImage from "@assets/Trustphoto.jpg";
import ReviewPhoto from "@assets/BOSTUBS.png";

export default function About() {
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
      {/* About Hero */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6" data-testid="text-about-hero-title">
              About BYB Digital
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-testid="text-about-hero-subtitle">
              Empowering growing businesses to thrive in the digital world through professional websites and comprehensive digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img 
                src={TrustImage} 
                alt="Modern digital workspace with computers and design tools" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="img-about-workspace"
              />
            </div>

            <div className="fade-in">
              <h2 className="text-3xl font-bold text-grey-dark mb-6" data-testid="text-about-main-title">
                Empowering Growing Businesses in the Digital World
              </h2>
              <p className="text-lg text-grey-text mb-6 leading-relaxed" data-testid="text-about-paragraph-1">
                At BYB Digital, we understand that growing businesses need more than just a website – they need a complete digital presence that builds trust and drives growth. Our team specializes in creating modern, professional websites that reflect your brand's unique personality and values.
              </p>
              <p className="text-lg text-grey-text mb-8 leading-relaxed" data-testid="text-about-paragraph-2">
                We focus on affordability without compromising quality, ensuring every growing business can compete in today's digital marketplace. From initial design to ongoing support, we're your partner in digital success.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-grey-dark mb-1" data-testid="text-feature-title-small-business">Small Business Focus</h4>
                    <p className="text-grey-text text-sm" data-testid="text-feature-desc-small-business">Tailored solutions for growing businesses</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-grey-dark mb-1" data-testid="text-feature-title-built-care">Built with Care</h4>
                    <p className="text-grey-text text-sm" data-testid="text-feature-desc-built-care">Every project receives personal attention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-grey-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-grey-dark mb-6" data-testid="text-mission-title">
              Our Mission & Values
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg fade-in">
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-grey-dark mb-4" data-testid="text-value-title-mission">Our Mission</h3>
              <p className="text-grey-text leading-relaxed" data-testid="text-value-desc-mission">
                To democratize professional web design and make high-quality digital solutions accessible to growing businesses everywhere.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg fade-in">
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-grey-dark mb-4" data-testid="text-value-title-passion">Our Passion</h3>
              <p className="text-grey-text leading-relaxed" data-testid="text-value-desc-passion">
                We're passionate about helping growing businesses succeed online and building lasting relationships with our clients.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg fade-in md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-grey-dark mb-4" data-testid="text-value-title-commitment">Our Commitment</h3>
              <p className="text-grey-text leading-relaxed" data-testid="text-value-desc-commitment">
                We commit to delivering exceptional quality, transparent communication, and ongoing support for every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-grey-light rounded-3xl p-8 lg:p-12 fade-in">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src={ReviewPhoto}
                  alt="Professional headshot of satisfied business owner" 
                  className="w-full h-full object-cover"
                  data-testid="img-testimonial-photo"
                />
              </div>
              <blockquote className="text-xl lg:text-2xl text-grey-dark font-medium mb-6 max-w-4xl mx-auto" data-testid="text-testimonial-quote">
                "BYB Digital transformed our online presence completely. Our new website not only looks professional but builds trust with our users. The BYB team was responsive, professional, and delivered exactly what we needed. Visit our website to experience the work done by BYB!"
              </blockquote>
              <div className="text-primary font-semibold" data-testid="text-testimonial-name">BosTubs</div>
              <div className="text-grey-text" data-testid="text-testimonial-title">www.BosTubs.co.za</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
