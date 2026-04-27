import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-purple-200 mb-4 md:mb-0">
            <p className="flex items-center">
              © {currentYear} Sombabu Patel. Made with 
              <Heart className="w-4 h-4 mx-1 text-red-400" />
              using React & Tailwind CSS
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/Sombabu25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-200 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sombabu-patel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-200 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sombabupatel25@gmail.com"
              className="text-purple-300 hover:text-purple-200 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Back to top button */}
        <div className="text-center mt-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
