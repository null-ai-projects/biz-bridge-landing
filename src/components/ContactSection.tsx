import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Сообщение успешно отправлено!",
      description: "Мы свяжемся с вами в течение 24 часов.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес офиса",
      details: ["ул. Деловая, д. 123", "г. Торговый, ТГ 12345", "Россия"],
    },
    {
      icon: Phone,
      title: "Телефоны",
      details: ["+7 (495) 123-4567", "+7 (495) 987-6543", "Бесплатный: 8-800-КРИСТАЛЛ"],
    },
    {
      icon: Mail,
      title: "Email адреса",
      details: ["sales@spk-kristall.ru", "support@spk-kristall.ru", "partners@spk-kristall.ru"],
    },
    {
      icon: Clock,
      title: "Часы работы",
      details: ["Понедельник - Пятница: 9:00 - 18:00", "Суббота: 10:00 - 16:00", "Воскресенье: Выходной"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Связаться с нами
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Свяжитесь с нашей командой сегодня и узнайте, как мы можем помочь развитию вашего бизнеса 
            с нашими комплексными оптовыми решениями.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft border-0">
              <CardHeader className="gradient-primary text-white">
                <CardTitle className="text-2xl text-white">Отправить сообщение</CardTitle>
                <p className="text-blue-100">
                  Заполните форму ниже, и мы свяжемся с вами в течение 24 часов.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Полное имя *</Label>
                      <Input
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="transition-fast"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email адрес *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="transition-fast"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Номер телефона</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="transition-fast"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Сообщение *</Label>
                    <Textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Опишите ваши оптовые потребности, требования к продукции, объемы заказов или любые вопросы для нашей команды..."
                      required
                      className="min-h-[120px] transition-fast"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-primary hover:shadow-medium transition-smooth text-lg py-4"
                  >
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-xl">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Additional CTA */}
            <Card className="shadow-soft border-0 gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Нужна срочная помощь?</h3>
                <p className="text-blue-100 mb-4">
                  Звоните нашей команде продаж для срочных вопросов или немедленной поддержки.
                </p>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-smooth"
                >
                  Звонить: +7 (495) 123-4567
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}