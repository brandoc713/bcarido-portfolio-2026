import React from 'react';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-brand-rosewhite-border py-12 mt-32 position-relative z-10 glass-panel">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-heading text-2xl font-bold mb-2 rosewhite-gradient-text">Let's Connect</h3>
          <p className="text-brand-text/70 mb-4 text-center md:text-left">
            Always open to discussing new opportunities or collaborations.
          </p>
          <a 
            href="mailto:contact@example.com" 
            className="flex items-center gap-2 text-brand-rosewhite hover:text-brand-accent transition-colors border-b border-transparent hover:border-brand-rosewhite pb-1 font-bold"
          >
            <Mail size={18} /> contact@example.com
          </a>
        </div>

        <div className="flex gap-6">
          <a href="#" className="w-12 h-12 rounded-full glass-panel flex flex-col items-center justify-center text-brand-text hover:text-brand-rosewhite hover:scale-110 transition-all duration-300">
            <Linkedin size={22} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full glass-panel flex flex-col items-center justify-center text-brand-text hover:text-brand-rosewhite hover:scale-110 transition-all duration-300">
            <Github size={22} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full glass-panel flex flex-col items-center justify-center text-brand-text hover:text-brand-rosewhite hover:scale-110 transition-all duration-300">
            <Twitter size={22} />
          </a>
        </div>

      </div>
      
      <div className="text-center text-brand-text/40 text-sm mt-12 font-stats">
        © {new Date().getFullYear()} Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
