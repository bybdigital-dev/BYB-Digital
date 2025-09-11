import { useEffect } from "react"; 
import { Link } from "wouter"; 
import { Button } from "@/components/ui/button"; 
import { Star, Users, ArrowRight } from "lucide-react"; 
import BackgroundImage from "@assets/bg2.png";

export default function Home() { 
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
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {/* Semi-transparent dark overlay */}
        <div className="absolute inset-0 bg-Black z-0"></div>


        {/* jy moet maar se ou
        Ja sal bietjie rondspeel en dalk ander piks try, jys fokken goed in die kak of help mr chet paid darem? Myne is doos dom. Ek dink Mr Chet Paid help baie. Ek sluit more aan

        LOEL

        As jy die original code soek, ek het dit hier: LIEWE FOK
HAHAH

Sien jy hoe suggest die ding text?
Ja ekt gesien, my een suggestion was "Ek is dom,lol"

Hy het ook iets gese van eks dom
mr agent troll ons
Vuil agent die. 
Is ja, right next moet ons gmail maak en insta ens anders moet ek links uithaal en dan nog net services deel update dan hy shap.

Eks ok met dit? Ons kan seker al begin mense vra? Soos iemand soos Dawie gaan nie om gee oor die insta nie, maar ander mense sal seker


nee ek stem fok insta vir nou, ek haal vir nou die link uit en dan as ons insta het kan ons hom net weer add. 

Yebo eks in

mooi, behoort more klaar te maak met halfas dan kan ons wegspring

lekker man dankie


/* Hero Section 
        
        <section className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden"> 
  
  /* Background decorative elements 
          
          <div className="absolute inset-0 opacity-10"> <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div> <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div> </div> <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"> <div className="fade-in"> <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black-200 leading-tight" data-testid="text-hero-headline"> Build Your Brand.<br /> <span className="text-blue-500">Build Your Trust.</span> </h1> <p className="text-xl sm:text-2xl text-black mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subheadline"> BYB Digital helps growing businesses progress with modern websites, fast turnaround, and reliable digital solutions. </p> <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"> <Link href="/contact" data-testid="link-hero-get-started"> <Button size="lg" className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"> Get Started Today </Button> </Link> <Link href="/services" data-testid="link-hero-services"> <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"> Our Services </Button> </Link> </div> </div> 
            
            /* Trust indicators 
            
            <div className="mt-16 fade-in"> <p className="text-blue-500 text-sm font-medium mb-4" data-testid="text-trust-indicator">TRUSTED BY GROWING BUSINESSES</p> <div className="flex justify-center items-center space-x-8 opacity-60"> <div className="text-blue-500 text-2xl font-bold" data-testid="text-clients-count">50+</div> <div className="w-1 h-1 bg-blue-500 rounded-full"></div> <div className="text-blue-500 text-sm">Happy Clients</div> <div className="w-1 h-1 bg-blue-500 rounded-full"></div> <div className="flex items-center"> <span className="text-blue-500 text-2xl font-bold mr-1">5</span> <Star className="w-5 h-5 text-yellow-300 fill-current" /> </div> <div className="w-1 h-1 bg-blue-500 rounded-full"></div> <div className="text-blue-500 text-sm">Average Rating</div> </div> </div> </div> </section>
 
        */}
        


        
        {/* Decorative circles 
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>*/}

        {/* Main content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight" data-testid="text-hero-headline">
              Build Your Brand.<br />
              <span className="text-blue-400">Build Your Trust.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subheadline">
              BYB Digital helps growing businesses progress with modern websites, fast turnaround, and reliable digital solutions.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link href="/contact" data-testid="link-hero-get-started">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/services" data-testid="link-hero-services">
                <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
                 
          {/* Trust indicators */}
          <div className="fade-in w-full px-4 py-8 md:py-16">
            <p
              className="text-white text-sm font-medium mb-6 text-center"
              data-testid="text-trust-indicator"
            >
              TRUSTED BY GROWING BUSINESSES
            </p>

              <div className="flex flex-wrap justify-center items-center gap-1 opacity-80 text-white text-center">
                <div className="text-2xl font-bold" data-testid="text-clients-count">50+</div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="text-sm">Satisfied Clients</div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold mr-1">5</span>
                  <Star className="w-5 h-5 text-yellow-300 fill-current" />
                </div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="text-sm">Average Rating</div>
            </div>
          </div>
          </div>
      </section>


      {/* Quick About Preview */} 
      <section className="py-20 bg-white"> 
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="text-center mb-16 fade-in"> 
            <h2 className="text-4xl sm:text-5xl font-bold text-grey-dark mb-6" data-testid="text-about-preview-title"> 
              Empowering Growing Businesses 
            </h2> 
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div> 
            <p className="text-xl text-grey-text max-w-3xl mx-auto" data-testid="text-about-preview-subtitle"> 
              We understand that growing businesses need more than just a website – they need a complete digital presence that builds trust and drives growth. 
            </p> 
          </div> 
          <div className="grid lg:grid-cols-3 gap-8"> 
            <div className="text-center fade-in"> 
              <div className="w-20 h-20 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6"> 
                <Users className="w-10 h-10 text-primary" /> 
              </div> 
              <h3 className="text-xl font-bold text-grey-dark mb-4" data-testid="text-feature-title-focus">Growing Business Focus</h3> 
              <p className="text-grey-text" data-testid="text-feature-desc-focus"> 
                Tailored solutions designed specifically for growing businesses and their unique needs. 
              </p> 
            </div> 
            <div className="text-center fade-in"> 
              <div className="w-20 h-20 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6"> 
                <Star className="w-10 h-10 text-primary" /> 
              </div> 
              <h3 className="text-xl font-bold text-grey-dark mb-4" data-testid="text-feature-title-quality">Professional Quality</h3> 
              <p className="text-grey-text" data-testid="text-feature-desc-quality"> 
                Every website is crafted with attention to detail and modern design principles. 
              </p> 
            </div> 
            <div className="text-center fade-in"> 
              <div className="w-20 h-20 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6"> 
                <ArrowRight className="w-10 h-10 text-primary" /> 
              </div> 
              <h3 className="text-xl font-bold text-grey-dark mb-4" data-testid="text-feature-title-growth">Growth Focused</h3> 
              <p className="text-grey-text" data-testid="text-feature-desc-growth"> 
                Solutions designed to help your business compete and thrive in today's digital marketplace. 
              </p> 
            </div> 
          </div> 
          <div className="text-center mt-12 fade-in"> 
            <Link href="/about" data-testid="link-learn-more"> 
              <Button className="bg-primary text-white hover:bg-primary-dark"> Learn More About Us <ArrowRight className="w-4 h-4 ml-2" /> </Button> 
            </Link> 
          </div> 
        </div> 
      </section> 
    </> 
  ); 
}
