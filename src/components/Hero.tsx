import { Button } from "@/components/ui/button";
import { ContactDialog } from "./ContactDialog";
import heroImage from "@/assets/hero-wholesale.jpg";
import { ArrowRight, TrendingUp, Users, Package } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern wholesale distribution center"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/75 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Ваш надежный
                <span className="block text-blue-300">оптовый партнер</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Соединяем бизнес с премиальными товарами по конкурентным ценам. 
                Надежные оптовые решения, адаптированные под ваши потребности.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactDialog>
                <Button 
                  size="lg" 
                  className="gradient-primary shadow-large hover:shadow-large hover:scale-105 transition-smooth text-lg px-8 py-4"
                >
                  Начать сотрудничество
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </ContactDialog>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-blue-300" />
                </div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-blue-200">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-blue-300" />
                </div>
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm text-blue-200">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Package className="h-6 w-6 text-blue-300" />
                </div>
                <div className="text-2xl font-bold">50К+</div>
                <div className="text-sm text-blue-200">Товаров продано</div>
              </div>
            </div>
          </div>
          
          {/* Right side - could be additional content or kept minimal */}
          <div className="hidden lg:block">
            {/* Intentionally minimal to keep focus on the left content */}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
