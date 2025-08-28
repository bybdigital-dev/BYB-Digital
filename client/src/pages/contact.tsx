    import { useEffect, useState } from "react";
    import { Mail, Phone, Clock, CheckCircle, ArrowRight } from "lucide-react";
    import { Button } from "@/components/ui/button";

    export default function Contact() {
      const [isSubmitted, setIsSubmitted] = useState(false);
      const [isSubmitting, setIsSubmitting] = useState(false);

      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) entry.target.classList.add("visible");
            });
          },
          { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
      }, []);

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
          const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
            },
          });

          if (response.ok) {
            setIsSubmitted(true);
            form.reset();
          } else {
            alert("Oops! Something went wrong. Please try again.");
          }
        } catch (error) {
          console.error(error);
          alert("Error sending message. Please try again later.");
        } finally {
          setIsSubmitting(false);
        }
      };

      return (
        <>
          {/* Contact Hero */}
          <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="fade-in">
                <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                  Ready to Get Started?
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  Let's discuss your project and see how we can help grow your business online
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-grey-light">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="fade-in">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-grey-dark mb-4">
                          Thank You! Message Sent Successfully.
                        </h3>
                        <p className="text-grey-text mb-6">
                          We'll get back to you within 24 hours.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline">
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <>
                        <h3 className="text-2xl font-bold text-grey-dark mb-6">
                          Send Us a Message
                        </h3>
                        <form
                          action="https://formsubmit.co/buildyourbranddigital@gmail.com"
                          method="POST"
                          className="space-y-6"
                          onSubmit={handleSubmit}
                        >
                          {/* Hidden fields */}
                          <input type="hidden" name="_captcha" value="false" />

                          {/* Name */}
                          <div>
                            <label className="block font-semibold text-grey-dark mb-1">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter your full name"
                              required
                              className="w-full border rounded-lg p-3"
                            />
                          </div>

                          {/* Email */}
                          <div>
                            <label className="block font-semibold text-grey-dark mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter your email address"
                              required
                              className="w-full border rounded-lg p-3"
                            />
                          </div>

                          {/* Message */}
                          <div>
                            <label className="block font-semibold text-grey-dark mb-1">
                              Project Details *
                            </label>
                            <textarea
                              name="message"
                              placeholder="Tell us about your project, goals, and timeline..."
                              required
                              className="w-full border rounded-lg p-3 h-32 resize-none"
                            />
                          </div>

                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </form>
                      </>
                    )}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="fade-in">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-grey-dark mb-6">Get in Touch</h3>
                      <p className="text-grey-text text-lg leading-relaxed mb-8">
                        Ready to transform your digital presence? Contact us today for a free consultation and custom quote.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-grey-dark mb-1">Email Us</h4>
                          <p className="text-grey-text">buildyourbranddigital@gmail.com</p>
                          <p className="text-sm text-grey-text">Response within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-grey-dark mb-1">Call Us</h4>
                          <p className="text-grey-text">072 270 6959 / 079 075 6571</p>
                          <p className="text-sm text-grey-text">Mon-Fri, 6AM-6PM EST</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-grey-dark mb-1">Quick Turnaround</h4>
                          <p className="text-grey-text">Most projects completed in less than one week!</p>
                          <p className="text-sm text-grey-text">Rush projects available</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary-light rounded-xl p-6">
                      <h4 className="font-bold text-grey-dark mb-3">Free Consultation</h4>
                      <p className="text-grey-text text-sm leading-relaxed mb-4">
                        Schedule a 30-minute call to discuss your project needs, get expert advice, and receive a custom quote.
                      </p>
                      <a 
                        href="#"
                        className="inline-flex items-center text-primary font-semibold text-sm hover:text-primary-dark transition-colors"
                      >
                        Schedule Now <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
