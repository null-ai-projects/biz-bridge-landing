import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Award, Globe, Shield, Truck, HandshakeIcon } from "lucide-react";

export function AboutSection() {
  const stats = [
    { icon: Building2, value: "15+", label: "Years in Business", description: "Established industry presence" },
    { icon: HandshakeIcon, value: "5,000+", label: "Active Clients", description: "Worldwide partnerships" },
    { icon: Truck, value: "1M+", label: "Products Delivered", description: "Successful transactions" },
    { icon: Globe, value: "50+", label: "Countries Served", description: "Global reach" }
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every product meets our rigorous quality standards before reaching your business."
    },
    {
      icon: Shield,
      title: "Reliable Partnership",
      description: "Consistent supply chain and dependable delivery schedules you can count on."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive supplier relationships enabling competitive pricing and diverse inventory."
    }
  ];

  return (
    <section id="about" className="py-20 gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            About Our Company
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built on Trust, Driven by Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've been the backbone of successful businesses worldwide, 
            providing premium wholesale solutions that drive growth and profitability.
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
                Our Story
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to revolutionize wholesale distribution, our company has grown 
                  from a small local operation to a global leader in B2B commerce.
                </p>
                <p>
                  We understand that every business has unique needs. That's why we've built flexible 
                  solutions, competitive pricing structures, and personalized service that adapts to 
                  your requirements.
                </p>
                <p>
                  Today, we're proud to serve thousands of businesses across 50+ countries, 
                  maintaining the same commitment to quality and service that started it all.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Why Choose Us
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