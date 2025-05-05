
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-barber-dark border-b border-barber-gold/30 sticky top-0 z-50">
      <div className="container py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Scissors className="text-barber-gold h-8 w-8" />
          <Link to="/" className="text-2xl font-cairo font-bold text-barber-gold">
            صالون السوداني الأنيق
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-barber-gold" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link to="/" className="text-white hover:text-barber-gold transition-colors">
            الرئيسية
          </Link>
          <Link to="/about" className="text-white hover:text-barber-gold transition-colors">
            نبذة عنا
          </Link>
          <Link to="/services" className="text-white hover:text-barber-gold transition-colors">
            خدماتنا
          </Link>
          <Link to="/gallery" className="text-white hover:text-barber-gold transition-colors">
            معرض الأعمال
          </Link>
          <Link to="/faq" className="text-white hover:text-barber-gold transition-colors">
            الأسئلة الشائعة
          </Link>
          <Link to="/reviews" className="text-white hover:text-barber-gold transition-colors">
            مراجعات العملاء
          </Link>
          <a 
            href="https://wa.me/966530640121" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="gold-button"
          >
            احجز الآن
          </a>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-barber-dark z-40 lg:hidden animate-fade-in">
            <div className="container py-20">
              <nav className="flex flex-col items-center gap-6 text-lg">
                <Link to="/" className="text-white hover:text-barber-gold transition-colors" onClick={toggleMenu}>
                  الرئيسية
                </Link>
                <Link to="/about" className="text-white hover:text-barber-gold transition-colors" onClick={toggleMenu}>
                  نبذة عنا
                </Link>
                <Link to="/services" className="text-white hover:text-barber-gold transition-colors" onClick={toggleMenu}>
                  خدماتنا
                </Link>
                <Link to="/gallery" className="text-white hover:text-barber-gold transition-colors" onClick={toggleMenu}>
                  معرض الأعمال
                </Link>
                <Link to="/faq" className="text-white hover:text-barber-gold transition-colors" onClick={toggleMenu}>
                  الأسئلة الشائعة
                </Link>
                <Link to="/reviews" className="text-white hover:text-barber-gold transition-colors" onClick={toggleMenu}>
                  مراجعات العملاء
                </Link>
                <a 
                  href="https://wa.me/966530640121" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="gold-button mt-4"
                  onClick={toggleMenu}
                >
                  احجز الآن
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
