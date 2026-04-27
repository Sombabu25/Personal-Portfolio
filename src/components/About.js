import React from 'react';
import { Star, Zap, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "10+", label: "Projects Completed", icon: <Star className="w-5 h-5" /> },
    { number: "5+", label: "Technologies", icon: <Zap className="w-5 h-5" /> },
    { number: "2+", label: "Years Experience", icon: <Target className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-lg leading-relaxed mb-8 text-purple-100">
              I'm a passionate Computer Science student and Full Stack Developer with a strong foundation in 
              web development and problem-solving. I love creating innovative solutions that make a difference 
              and constantly strive to learn new technologies.
            </p>
            
            <p className="text-lg leading-relaxed mb-8 text-purple-100">
              My journey in tech started with curiosity and has evolved into a passion for building scalable 
              applications that solve real-world problems. I specialize in React, Node.js, and modern web 
              technologies, with a growing interest in machine learning and data science.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 text-center border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-3 text-purple-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
