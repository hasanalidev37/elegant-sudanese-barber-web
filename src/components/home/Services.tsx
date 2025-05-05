
import React from "react";
import { Scissors } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "حلاقة الشعر",
      description: "قصات عصرية وكلاسيكية تناسب جميع الأذواق",
      price: "70 ريال",
      icon: <Scissors className="text-barber-gold w-8 h-8" />,
    },
    {
      title: "تشذيب اللحية",
      description: "عناية فائقة وتصميم احترافي للحية",
      price: "35 ريال",
      icon: <Scissors className="text-barber-gold w-8 h-8" />,
    },
    {
      title: "حلاقة للأطفال",
      description: "خدمات خاصة ومناسبة للأطفال في أجواء مريحة",
      price: "40 ريال",
      icon: <Scissors className="text-barber-gold w-8 h-8" />,
    },
    {
      title: "العناية بالبشرة",
      description: "تنظيف البشرة وإزالة الرؤوس السوداء",
      price: "اتصل بنا",
      icon: <Scissors className="text-barber-gold w-8 h-8" />,
    },
    {
      title: "الحمام المغربي",
      description: "تجربة مميزة للاسترخاء والعناية بالبشرة",
      price: "اتصل بنا",
      icon: <Scissors className="text-barber-gold w-8 h-8" />,
    },
  ];

  return (
    <section id="services" className="py-16 bg-barber-dark">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="section-title inline-block">خدماتنا المميزة</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            نقدم في صالون السوداني الأنيق مجموعة متكاملة من خدمات الحلاقة والعناية
            الشخصية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>{service.icon}</div>
                <div className="bg-barber-gold text-barber-dark px-3 py-1 rounded-full text-sm font-bold">
                  {service.price}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-barber-gold">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="gold-button">
            عرض جميع الخدمات
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
