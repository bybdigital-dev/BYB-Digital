import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Mail, Phone, Clock, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

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
      {/* Contact Hero */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6" data-testid="text-contact-hero-title">
              Ready to Get Started?
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-testid="text-contact-hero-subtitle">
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
                  <div className="text-center py-8" data-testid="div-success-message">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-grey-dark mb-4">Message Sent Successfully!</h3>
                    <p className="text-grey-text mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      data-testid="button-send-another"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-grey-dark mb-6" data-testid="text-form-title">Send Us a Message</h3>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel data-testid="label-name">Full Name *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your full name" 
                                  {...field} 
                                  data-testid="input-name"
                                />
                              </FormControl>
                              <FormMessage data-testid="error-name" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel data-testid="label-email">Email Address *</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="Enter your email address" 
                                  {...field} 
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage data-testid="error-email" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel data-testid="label-message">Project Details *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us about your project, goals, and timeline..."
                                  className="resize-none h-32"
                                  {...field} 
                                  data-testid="textarea-message"
                                />
                              </FormControl>
                              <FormMessage data-testid="error-message" />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                          disabled={contactMutation.isPending}
                          data-testid="button-submit-form"
                        >
                          {contactMutation.isPending ? "Sending..." : "Send Message"}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="fade-in">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-grey-dark mb-6" data-testid="text-contact-info-title">Get in Touch</h3>
                  <p className="text-grey-text text-lg leading-relaxed mb-8" data-testid="text-contact-info-desc">
                    Ready to transform your digital presence? Contact us today for a free consultation and custom quote.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-grey-dark mb-1" data-testid="text-contact-email-title">Email Us</h4>
                      <p className="text-grey-text" data-testid="text-contact-email">hello@bybdigital.com</p>
                      <p className="text-sm text-grey-text" data-testid="text-contact-email-response">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-grey-dark mb-1" data-testid="text-contact-phone-title">Call Us</h4>
                      <p className="text-grey-text" data-testid="text-contact-phone">(555) 123-4567</p>
                      <p className="text-sm text-grey-text" data-testid="text-contact-phone-hours">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-grey-dark mb-1" data-testid="text-contact-turnaround-title">Quick Turnaround</h4>
                      <p className="text-grey-text" data-testid="text-contact-turnaround">Most projects completed in 2-4 weeks</p>
                      <p className="text-sm text-grey-text" data-testid="text-contact-turnaround-rush">Rush projects available</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-light rounded-xl p-6">
                  <h4 className="font-bold text-grey-dark mb-3" data-testid="text-consultation-title">Free Consultation</h4>
                  <p className="text-grey-text text-sm leading-relaxed mb-4" data-testid="text-consultation-desc">
                    Schedule a 30-minute call to discuss your project needs, get expert advice, and receive a custom quote.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary font-semibold text-sm hover:text-primary-dark transition-colors"
                    data-testid="link-schedule-consultation"
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
