
import React from "react";
import Layout from "../components/Layout";

const About = () => {
  const values = [
    {
      title: "الاحترافية",
      description: "الالتزام بأعلى معايير الأداء في تقديم خدماتنا",
    },
    {
      title: "النظافة",
      description: "الاهتمام بنظافة وتعقيم المكان والأدوات",
    },
    {
      title: "الاهتمام بالعميل",
      description: "جعل رضا العميل أولوية قصوى ومحور اهتمامنا",
    },
    {
      title: "التطوير المستمر",
      description: "مواكبة أحدث صيحات وتقنيات الحلاقة والعناية الشخصية",
    },
    {
      title: "الأمانة",
      description: "الالتزام بالمصداقية والشفافية في تعاملاتنا",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-barber-bg-dark to-barber-dark">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-cairo text-barber-gold font-bold mb-6 animate-fade-in">
              نبذة عن صالون السوداني الأنيق
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
              تعرف على قصتنا، رؤيتنا، وما يميزنا في عالم الحلاقة والعناية الشخصية
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-barber-dark">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">قصة صالون السوداني الأنيق</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  تأسس صالون السوداني الأنيق للحلاقة لتقديم تجربة حلاقة متميزة تجمع بين الاحترافية والراحة. يضم صالوننا نخبة من الحلاقين السودانيين المحترفين الذين يتمتعون بخبرة واسعة في مجال الحلاقة والعناية الشخصية.
                </p>
                <p>
                  نهدف إلى الارتقاء بمستوى خدمات الحلاقة في الرياض من خلال توفير بيئة نظيفة ومريحة، واستخدام أفضل المنتجات وأدوات الحلاقة المعقمة، لنضمن لكم تجربة متميزة في كل زيارة.
                </p>
              </div>
            </div>
            <div className="bg-barber-dark-light border border-barber-gold/30 p-8 rounded-lg animate-fade-in">
              <h3 className="text-xl font-cairo text-barber-gold mb-4">رؤيتنا</h3>
              <p className="text-gray-300 mb-6">
                نسعى لأن نكون الوجهة الأولى والمفضلة لخدمات الحلاقة الرجالية في الرياض، من خلال تقديم خدمات متميزة تلبي احتياجات وتطلعات عملائنا بأعلى مستويات الجودة والاحترافية.
              </p>
              <img
                src="https://placehold.co/600x400/23272C/CAB492?text=صورة+الصالون"
                alt="صالون السوداني الأنيق"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-barber-dark to-barber-dark-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title inline-block">قيمنا</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              تعكس قيمنا التزامنا تجاه عملائنا وسعينا الدائم لتقديم أفضل الخدمات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-barber-dark p-6 rounded-lg border border-barber-gold/30 hover:border-barber-gold/70 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-barber-gold">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salon Environment Section */}
      <section className="py-16 bg-barber-dark">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://placehold.co/600x400/23272C/CAB492?text=صورة+الصالون+1"
                  alt="صالون السوداني الأنيق"
                  className="w-full h-auto rounded-lg"
                />
                <img
                  src="https://placehold.co/600x400/23272C/CAB492?text=صورة+الصالون+2"
                  alt="صالون السوداني الأنيق"
                  className="w-full h-auto rounded-lg"
                />
                <img
                  src="https://placehold.co/600x400/23272C/CAB492?text=صورة+الصالون+3"
                  alt="صالون السوداني الأنيق"
                  className="w-full h-auto rounded-lg"
                />
                <img
                  src="https://placehold.co/600x400/23272C/CAB492?text=صورة+الصالون+4"
                  alt="صالون السوداني الأنيق"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="section-title">بيئة الصالون</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  يتميز صالون السوداني الأنيق بتصميمه الأنيق والمريح الذي يوفر أجواء هادئة ومريحة لجميع العملاء. حرصنا على تجهيز الصالون بأحدث الادوات والمعدات لضمان تجربة مريحة، كما يتوفر منطقة انتظار مجهزة بوسائل الراحة والترفيه.
                </p>
                <p>
                  نولي اهتماماً خاصاً بالأطفال، حيث خصصنا لهم منطقة ملائمة تجعل تجربة الحلاقة لديهم ممتعة وخالية من الإزعاج.
                </p>
              </div>
              <div className="mt-8">
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
