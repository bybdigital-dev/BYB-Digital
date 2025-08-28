import { Link } from "wouter";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@assets/BYB_BuildYourBrand_Logo.png";

export default function Footer() {
  return (
    <footer className="bg-grey-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img
                    src={logo}
                    alt="BYB Logo"
                    className="w-10 h-10 object-contain rounded-full"
                  />
              <span className="font-bold text-xl">BYB Digital</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Helping growing businesses build their brand and grow their digital presence with professional websites and digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors" data-testid="link-footer-about">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-white transition-colors" data-testid="link-footer-services">
                Services
              </Link>
              <Link href="/why-choose-us" className="block text-gray-400 hover:text-white transition-colors" data-testid="link-footer-why-us">
                Why Choose Us
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors" data-testid="link-footer-contact">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="space-y-2 mb-6">
              <p className="text-gray-400" data-testid="text-footer-email">buildyourbranddigital@gmail.com</p>
              <p className="text-gray-400" data-testid="text-footer-phone">072 270 6959 / 079 075 6571</p>
            </div>
            
            <div className="flex space-x-4">
             
              {/*<a 
                href="#" 
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="link-social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>*/}
              
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400" data-testid="text-copyright">© 2025 BYB Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
