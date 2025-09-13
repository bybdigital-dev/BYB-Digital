import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@assets/BYB_BuildYourBrand_Logo.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/why-choose-us", label: "Why Us" },
  ];

  const norm = (p: string) => (p === "" ? "/" : p); // handle initial empty path under hash routing
  const isActive = (href: string) => {
    const loc = norm(location);
    if (href === "/") return loc === "/";
    return loc.startsWith(href);
  };

  return (
    <nav className="fixed w-full top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home-logo">
            <img src={logo} alt="BYB Logo" className="w-10 h-10 object-contain rounded-full" />
            <span className="font-bold text-xl text-grey-dark">BYB Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors duration-200 font-medium",
                  isActive(item.href) ? "text-primary" : "text-grey-text hover:text-primary"
                )}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </Link>
            ))}

            {/* Contact button rendered AS the link (no button-inside-anchor) */}
            <Button asChild className="bg-primary text-white hover:bg-primary-dark">
              <Link href="/contact" data-testid="link-nav-contact">
                Contact
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-4 py-2 rounded-lg transition-colors duration-200 font-medium",
                  isActive(item.href) ? "text-primary bg-primary-light" : "text-grey-text hover:text-primary hover:bg-gray-50"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Contact button as link */}
            <Button asChild className="w-full bg-primary text-white hover:bg-primary-dark mt-2">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} data-testid="link-mobile-contact">
                Contact
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
