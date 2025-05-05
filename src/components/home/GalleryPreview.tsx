
import React from "react";

const GalleryPreview = () => {
  // We'll add placeholder images here, later will be replaced with actual images
  const images = [
    { id: 1, src: "https://placehold.co/400x400/23272C/CAB492?text=صورة+قص+شعر" },
    { id: 2, src: "https://placehold.co/400x400/23272C/CAB492?text=تشذيب+لحية" },
    { id: 3, src: "https://placehold.co/400x400/23272C/CAB492?text=قص+شعر+اطفال" },
    { id: 4, src: "https://placehold.co/400x400/23272C/CAB492?text=صورة+العناية" },
  ];

  return (
    <section className="py-16 bg-barber-dark">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="section-title inline-block">معرض الأعمال</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            نقدم لكم مجموعة من أعمالنا المميزة التي تعكس جودة وإبداع خدماتنا في صالون
            السوداني الأنيق
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg border-2 border-barber-gold/30 hover:border-barber-gold animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={`صورة معرض ${image.id}`}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/gallery" className="gold-button">
            مشاهدة معرض الأعمال
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
