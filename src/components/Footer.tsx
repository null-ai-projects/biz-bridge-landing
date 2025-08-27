import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "./ContactDialog";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const navigationLinks = {
    company: [
      { label: "О нас", href: "#about" },
      { label: "Наша история", href: "#about" },
    ],
    support: [
      { label: "Связаться с поддержкой", href: "#contact" },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-xl">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">СПК.КРИСТАЛЛ</h3>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              Ваш надежный оптовый партнер уже более 15 лет. Мы соединяем бизнес 
              с премиальными товарами по конкурентным ценам, обеспечивая надежные цепочки 
              поставок и исключительный сервис.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>ул. Деловая, д. 123, г. Торговый, ТГ 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+7 (495) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>sales@spk-kristall.ru</span>
              </div>
            </div>
            
            <ContactDialog>
              <Button 
                className="gradient-primary hover:shadow-medium transition-smooth"
                size="lg"
              >
                Начать сотрудничество
              </Button>
            </ContactDialog>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
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
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
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
        </div>
      </div>

      <Separator className="bg-slate-700" />
      
      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-400 text-sm">
            © 2024 СПК.КРИСТАЛЛ. Все права защищены. | Лицензия оптового дистрибьютора #РД-123456
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <span>Сертификат ISO 9001:2015</span>
            <span>•</span>
            <span>Рейтинг ТПП: A+</span>
            <span>•</span>
            <span>Член Российской ассоциации оптовиков</span>
          </div>
        </div>
      </div>
    </footer>
  );
}