
import React from "react";
import Layout from "../components/Layout";
import { Scissors, Check } from "lucide-react";

const Services = () => {
  const haircuts = [
    {
      title: "قصات الشعر العصرية",
      description:
        "نواكب أحدث صيحات الموضة العالمية في مجال قصات الشعر، ونقدم مجموعة متنوعة من القصات العصرية التي تتناسب مع مختلف أشكال الوجه وأنواع الشعر.",
      price: "70 ريال",
    },
    {
      title: "قصات الشعر الكلاسيكية",
      description:
        "للباحثين عن الأناقة التقليدية، نقدم أفضل القصات الكلاسيكية بلمسات عصرية تمنحكم مظهراً أنيقاً ومرتباً يناسب جميع المناسبات.",
      price: "70 ريال",
    },
    {
      title: "قصات شعر الأطفال",
      description:
        "نقدم خدمات حلاقة خاصة للأطفال في أجواء مريحة وودية، مع فريق متخصص في التعامل مع الأطفال لضمان تجربة ممتعة وخالية من الإزعاج.",
      price: "40 ريال",
    },
  ];

  const beardServices = [
    {
      title: "تشذيب وتصميم اللحية",
      description:
        "نقدم خدمات احترافية لتشذيب وتصميم اللحية بدقة عالية، مع مراعاة شكل الوجه وكثافة شعر اللحية لإبراز جمال ملامحكم.",
      price: "35 ريال",
    },
    {
      title: "حلاقة اللحية الكاملة",
      description:
        "لمن يفضلون الوجه الأملس، نقدم خدمة حلاقة متقنة تضمن نعومة البشرة وحمايتها من التهيج.",
      price: "25 ريال",
    },
    {
      title: "العناية باللحية",
      description:
        "خدمات متكاملة للعناية باللحية تشمل التنظيف العميق والترطيب واستخدام أفضل المنتجات والزيوت الطبيعية.",
      price: "50 ريال",
    },
  ];

  const skinCareServices = [
    {
      title: "تنظيف البشرة",
      description:
        "خدمة متكاملة لتنظيف البشرة وإزالة الرؤوس السوداء وترطيب البشرة للحصول على بشرة نظيفة وصحية.",
      price: "اتصل بنا",
    },
    {
      title: "الحمام المغربي",
      description:
        "تجربة فريدة للاسترخاء والعناية بالبشرة، متوفرة في صالوننا لتمنحكم نظافة عميقة وبشرة متجددة.",
      price: "اتصل بنا",
    },
  ];

  const products = [
    {
      title: "كريمات ما بعد الحلاقة",
      image: "https://placehold.co/400x400/23272C/CAB492?text=كريم+ما+بعد+الحلاقة",
    },
    {
      title: "منتجات العناية بالشعر",
      image:
        "https://placehold.co/400x400/23272C/CAB492?text=منتجات+العناية+بالشعر",
    },
    {
      title: "منتجات العناية باللحية",
      image:
        "https://placehold.co/400x400/23272C/CAB492?text=منتجات+العناية+باللحية",
    },
    {
      title: "ماكينات التنعيم",
      image: "https://placehold.co/400x400/23272C/CAB492?text=ماكينات+التنعيم",
    },
  ];

  const ServiceCard = ({ title, description, price }) => (
    <div className="service-card">
      <div className="flex items-center justify-between mb-4">
        <Scissors className="text-barber-gold w-8 h-8" />
        <div className="bg-barber-gold text-barber-dark px-3 py-1 rounded-full text-sm font-bold">
          {price}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-barber-gold">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-barber-bg-dark to-barber-dark">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-cairo text-barber-gold font-bold mb-6 animate-fade-in">
              خدماتنا المتميزة
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
              نقدم في صالون السوداني الأنيق مجموعة متكاملة من خدمات الحلاقة والعناية
              الشخصية التي تلبي احتياجات جميع عملائنا بمختلف أعمارهم وأذواقهم
            </p>
          </div>
        </div>
      </section>

      {/* Haircuts Section */}
      <section className="py-16 bg-barber-dark">
        <div className="container">
          <h2 className="section-title mb-10">قصات الشعر</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {haircuts.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Beard Services */}
      <section className="py-16 bg-gradient-to-b from-barber-dark to-barber-dark-light">
        <div className="container">
          <h2 className="section-title mb-10">خدمات اللحية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beardServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Skin Care Services */}
      <section className="py-16 bg-barber-dark">
        <div className="container">
          <h2 className="section-title mb-10">خدمات العناية بالبشرة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skinCareServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-gradient-to-b from-barber-dark-light to-barber-dark">
        <div className="container">
          <h2 className="section-title mb-10">المنتجات المتوفرة</h2>
          <p className="text-gray-300 mb-8 max-w-3xl">
            نوفر في صالون حلاق السوداني الأنيق مجموعة متميزة من المنتجات المختارة بعناية:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-barber-dark rounded-lg overflow-hidden border border-barber-gold/30 hover:border-barber-gold transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-barber-gold font-cairo font-bold">{product.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-barber-dark">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-barber-dark-light border border-barber-gold/50 p-8 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-cairo text-barber-gold font-bold mb-4">
              هل أنت مستعد لتجربة خدماتنا المميزة؟
            </h2>
            <p className="text-gray-300 mb-8">
              نسعد بخدمتكم وتقديم أفضل تجربة حلاقة لكم في صالون السوداني الأنيق. احجز موعدك الآن.
            </p>
            <a
              href="https://wa.me/966530640121"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button"
            >
              احجز موعدك الآن
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
