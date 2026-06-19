import React, { useState, useEffect } from 'react';
import { Menu, X, Origami, Cpu, TreePine, Radar } from 'lucide-react';

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
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-brand-rosewhite flex items-center justify-center text-brand-bg font-bold">
            <Radar size={23} aria-hidden="true" />
          </div>
          <span className="font-heading font-bold text-xl group-hover:scale-105 transition-transform duration-300">Brandon Carido</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-body text-brand-text/80 hover:text-brand-rosewhite transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:brandon.carido@proton.me"
            className="px-6 py-2 rounded-full border border-brand-rosewhite text-brand-rosewhite hover:bg-brand-rosewhite hover:text-brand-bg transition-colors duration-300 font-bold"
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
              className="text-brand-text hover:text-brand-rosewhite font-bold text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:brandon.carido@proton.me"
            className="px-8 py-3 rounded-full border border-brand-rosewhite text-brand-rosewhite font-bold mt-2"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
