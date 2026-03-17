import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-bg font-bold">
            B
          </div>
          <span className="font-heading font-bold text-xl group-hover:scale-105 transition-transform duration-300">Brandon Carido</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-body text-brand-text/80 hover:text-brand-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:contact@example.com"
            className="px-6 py-2 rounded-full border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-bg transition-colors duration-300 font-bold"
          >
            Contact
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-brand-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel absolute top-full left-0 w-full py-6 flex flex-col items-center gap-6 border-t font-body">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-text hover:text-brand-gold font-bold text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:[EMAIL_ADDRESS]"
            className="px-8 py-3 rounded-full border border-brand-gold text-brand-gold font-bold mt-2"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
