import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp, Home, Code, User, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <Code className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Home className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Phone className="w-4 h-4" /> },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/Sombabu25"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/sombabu-patel"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:sombabu25@outlook.com"
    }
  ];

  return (
    <footer className="bg-black/60 backdrop-blur-md border-t border-white/10 py-12 px-6 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Main 3-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Left Column - Personal Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sombabu Patel
            </h3>
            <p className="text-white/80 font-medium mb-4 leading-relaxed">
              Backend-focused developer building scalable and real-world applications
            </p>
            
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-400/30">
              <p className="text-purple-200 text-sm mb-3 font-medium">
                Looking for internship opportunities
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2.5 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
              >
                Contact Me
              </button>
            </div>
          </div>
          
          {/* Center Column - Quick Navigation */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Navigation</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center justify-center md:justify-start space-x-2 text-white/70 hover:text-purple-300 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  <span className="text-purple-400">{link.icon}</span>
                  <span className="font-medium">{link.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Column - Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-purple-500/20 hover:border-purple-400/50 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 group"
                  aria-label={social.label}
                >
                  <div className="text-white/80 group-hover:text-purple-300 transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 group"
            >
              <span className="font-medium">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
        
        {/* Bottom section - Copyright and tagline */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              <p className="flex items-center justify-center md:justify-start">
                © {currentYear} Sombabu Patel. All rights reserved.
              </p>
            </div>
            
            <div className="text-white/60 text-sm">
              <p className="flex items-center justify-center md:justify-end">
                Crafted with 
                <Heart className="w-4 h-4 mx-1 text-red-400" />
                using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
