import React from 'react';
import { Github, Linkedin, Mail, Star } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const Header = ({ scrollToSection }) => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Profile Image with Enhanced Animation */}
          <div className="relative inline-block mb-8 group">
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 shadow-2xl shadow-purple-900/50 group-hover:shadow-purple-500/70 transition-all duration-500">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 group-hover:border-purple-400 transition-all duration-300">
                <img 
                  src={profileImage} 
                  alt="Sombabu Patel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            
            {/* Floating stars around profile */}
            <Star className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
            <Star className="absolute -bottom-2 -left-2 w-4 h-4 text-yellow-300 animate-bounce delay-500" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200 animate-gradient">
            Sombabu Patel
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-6 text-purple-100 font-light">
            Full Stack Developer | Computer Science Student
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-purple-50 leading-relaxed">
            Passionate about building innovative web applications and solving complex problems with cutting-edge technologies.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/Sombabu25" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a 
              href="https://linkedin.com/in/sombabu-patel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a 
              href="mailto:sombabupatel25@gmail.com" 
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
          
          {/* Call to Action */}
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('projects')}
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 cursor-pointer"
            >
              Explore My Work
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
