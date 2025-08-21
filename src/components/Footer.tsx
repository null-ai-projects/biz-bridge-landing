import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "./ContactDialog";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const navigationLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Story", href: "#about" },
      { label: "Careers", href: "#" },
      { label: "News & Updates", href: "#" },
    ],
    services: [
      { label: "Wholesale Solutions", href: "#" },
      { label: "Bulk Ordering", href: "#" },
      { label: "Custom Packages", href: "#" },
      { label: "Logistics Support", href: "#" },
    ],
    support: [
      { label: "Contact Support", href: "#contact" },
      { label: "Order Tracking", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Documentation", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Legal Notice", href: "#" },
    ],
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-xl">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">WholesalePro</h3>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              Your trusted wholesale partner for over 15 years. We connect businesses 
              with premium products at competitive prices, ensuring reliable supply 
              chains and exceptional service.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>123 Business District, Commerce City, CC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>sales@wholesale.com</span>
              </div>
            </div>
            
            <ContactDialog>
              <Button 
                className="gradient-primary hover:shadow-medium transition-smooth"
                size="lg"
              >
                Start Partnership
              </Button>
            </ContactDialog>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {navigationLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-white transition-fast text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {navigationLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-white transition-fast text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {navigationLinks.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-white transition-fast text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {navigationLinks.legal.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-white transition-fast text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-700" />
      
      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-400 text-sm">
            © 2024 WholesalePro. All rights reserved. | Licensed Wholesale Distributor #WD-123456
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <span>ISO 9001:2015 Certified</span>
            <span>•</span>
            <span>BBB A+ Rating</span>
            <span>•</span>
            <span>Member of National Wholesale Association</span>
          </div>
        </div>
      </div>
    </footer>
  );
}