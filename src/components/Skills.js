import React from 'react';
import { Code, Globe, Database, Zap, User } from 'lucide-react';

const Skills = () => {
  const skills = [
    { 
      category: "Programming Languages", 
      items: ["C++", "Golang", "Python", "JavaScript", "SQL"],
      icon: <Code className="w-5 h-5" />
    },
    { 
      category: "Backend Development", 
      items: ["Node.js", "Express.js", "Flask", "REST APIs", "XML/JSON"],
      icon: <Globe className="w-5 h-5" />
    },
    { 
      category: "Database & Tools", 
      items: ["MongoDB", "MySQL", "Git", "GitHub", "Postman"],
      icon: <Database className="w-5 h-5" />
    },
    { 
      category: "Data Science", 
      items: ["Pandas", "NumPy", "Matplotlib", "Machine Learning", "Statistics"],
      icon: <Zap className="w-5 h-5" />
    },
    { 
      category: "Soft Skills", 
      items: ["Problem Solving", "Teamwork", "Communication", "Adaptability"],
      icon: <User className="w-5 h-5" />
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="text-purple-400 mr-3">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-3 py-1 rounded-full text-sm text-purple-200 border border-purple-400/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
