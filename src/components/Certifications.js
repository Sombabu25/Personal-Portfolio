import React from 'react';
import { Sparkles, Github, Code, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Crash Course on Python",
      issuer: "Google",
      link: "https://coursera.org/verify/C4JI8SJ23QRAJ",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      title: "Introduction to Git and GitHub",
      issuer: "Google",
      link: "https://coursera.org/verify/FRGCKNDSEGBN",
      icon: <Github className="w-5 h-5" />
    },
    {
      title: "Intro to Front-End Development",
      issuer: "Meta",
      link: "https://coursera.org/verify/8QYZR7JA9BCZ",
      icon: <Code className="w-5 h-5" />
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="text-purple-400 mr-3">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {cert.title}
                  </h3>
                  <p className="text-purple-300 text-sm">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Verify Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
