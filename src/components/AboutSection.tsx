import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Award, Globe, Shield, Truck, HandshakeIcon } from "lucide-react";

export function AboutSection() {
  const stats = [
    { icon: Building2, value: "3+", label: "Лет в бизнесе", description: "Надежные поставки энергетиков" },
    { icon: HandshakeIcon, value: "5,000+", label: "Активных клиентов", description: "Магазины и заведения" },
    { icon: Truck, value: "7", label: "Ведущих брендов", description: "Red Bull, Monster, Burn и др." },
    { icon: Globe, value: "100+", label: "Городов доставки", description: "По всей России" }
  ];

  const values = [
    {
      icon: Award,
      title: "Сертифицированная продукция",
      description: "Все энергетические напитки имеют необходимые сертификаты качества и безопасности."
    },
    {
      icon: Shield,
      title: "Выгодные оптовые цены",
      description: "Прямые поставки от производителей позволяют предлагать лучшие цены на рынке."
    },
    {
      icon: Globe,
      title: "Гибкая система скидок",
      description: "Индивидуальный подход к каждому клиенту и выгодные условия для постоянных партнеров."
    }
  ];

  return (
    <section id="about" className="py-20 gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            О нашей компании
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Энергетические напитки оптом
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Сотрудничаем с надежными поставщиками, предлагая качественные и сертифицированные 
            энергетические напитки самых известных брендов по выгодным оптовым ценам.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-2xl mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Story & Values */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Наш ассортимент
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Мы предлагаем самые известные и популярные бренды энергетических напитков: 
                  <strong>Red Bull, Monster, Adrenaline Rush, Burn, Mustang Energy, BENERGY, Jaguar</strong> и другие.
                </p>
                <p>
                  У нас вы найдете различные варианты упаковок: от отдельных баночек до больших грузовых партий. 
                  Мы предлагаем выгодные оптовые цены, а также гибкую систему скидок для постоянных клиентов.
                </p>
                <p>
                  Независимо от того, нужны вам энергетические напитки для поставок в продуктовые магазины, 
                  кафе, фитнес-центры или для организации различных мероприятий — у нас вы найдете то, что ищете.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Почему выбирают нас
            </h3>
            {values.map((value, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-xl">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}