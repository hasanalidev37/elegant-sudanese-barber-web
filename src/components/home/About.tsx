
import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-barber-bg-dark to-barber-dark">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h2 className="section-title">نبذة عن الصالون</h2>
            <p className="text-gray-300 mb-4">
              تأسس صالون السوداني الأنيق للحلاقة لتقديم تجربة حلاقة متميزة تجمع بين الاحترافية والراحة. يضم صالوننا نخبة من الحلاقين السودانيين المحترفين الذين يتمتعون بخبرة واسعة في مجال الحلاقة والعناية الشخصية.
            </p>
            <p className="text-gray-300 mb-6">
              نهدف إلى الارتقاء بمستوى خدمات الحلاقة في الرياض من خلال توفير بيئة نظيفة ومريحة، واستخدام أفضل المنتجات وأدوات الحلاقة المعقمة، لنضمن لكم تجربة متميزة في كل زيارة.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-barber-gold mb-2">رؤيتنا</h3>
              <p className="text-gray-300 mb-4">
                نسعى لأن نكون الوجهة الأولى والمفضلة لخدمات الحلاقة الرجالية في الرياض، من خلال تقديم خدمات متميزة تلبي احتياجات وتطلعات عملائنا بأعلى مستويات الجودة والاحترافية.
              </p>
            </div>
            <div className="mt-8">
              <a href="/about" className="outline-button">
                المزيد عن الصالون
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            <div className="space-y-6">
              <div className="bg-barber-dark p-4 rounded-lg border border-barber-gold/30">
                <h3 className="text-barber-gold font-bold mb-2">الاحترافية</h3>
                <p className="text-sm text-gray-300">
                  الالتزام بأعلى معايير الأداء في تقديم خدماتنا
                </p>
              </div>
              <div className="bg-barber-dark p-4 rounded-lg border border-barber-gold/30">
                <h3 className="text-barber-gold font-bold mb-2">النظافة</h3>
                <p className="text-sm text-gray-300">
                  الاهتمام بنظافة وتعقيم المكان والأدوات
                </p>
              </div>
              <div className="bg-barber-dark p-4 rounded-lg border border-barber-gold/30">
                <h3 className="text-barber-gold font-bold mb-2">الأمانة</h3>
                <p className="text-sm text-gray-300">
                  الالتزام بالمصداقية والشفافية في تعاملاتنا
                </p>
              </div>
            </div>
            <div className="space-y-6 mt-10">
              <div className="bg-barber-dark p-4 rounded-lg border border-barber-gold/30">
                <h3 className="text-barber-gold font-bold mb-2">الاهتمام بالعميل</h3>
                <p className="text-sm text-gray-300">
                  جعل رضا العميل أولوية قصوى ومحور اهتمامنا
                </p>
              </div>
              <div className="bg-barber-dark p-4 rounded-lg border border-barber-gold/30">
                <h3 className="text-barber-gold font-bold mb-2">التطوير المستمر</h3>
                <p className="text-sm text-gray-300">
                  مواكبة أحدث صيحات وتقنيات الحلاقة والعناية الشخصية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
