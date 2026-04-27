import React from 'react';
import { ShoppingCart, Globe, Code, Database, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CanteenXpress",
      description: "A modern full-stack food ordering web application that digitizes traditional canteen experience with real-time ordering, admin dashboard, and secure authentication.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS"],
      link: "https://github.com/Sombabu25/CanteenXpress",
      icon: <ShoppingCart className="w-6 h-6" />,
      featured: true,
      features: [
        "User Authentication with JWT",
        "Real-time Menu & Order Management",
        "Admin Dashboard",
        "Responsive Design"
      ]
    },
    {
      title: "Movie Ticket Booking App",
      description: "A web-based movie booking platform with session-based authentication, dynamic movie display, and booking history tracking using client-side logic.",
      tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "REST API"],
      link: "https://github.com/Sombabu25/Movie-Ticket-Booking-App",
      icon: <Globe className="w-6 h-6" />,
      featured: true,
      features: [
        "Session-based Authentication",
        "Dynamic Movie Display",
        "Booking History Tracking",
        "Responsive Design"
      ]
    },
    {
      title: "Resume Matcher AI",
      description: "Built a full-stack app using Flask to match resumes with job descriptions using NLP (TF-IDF & Cosine Similarity).",
      tech: ["Flask", "Python", "NLP", "Machine Learning", "Scikit-learn"],
      link: "https://github.com/Sombabu25/Resume_Matcher",
      icon: <Code className="w-6 h-6" />,
      featured: true,
      features: [
        "NLP-based Resume Parsing",
        "Cosine Similarity Matching",
        "Flask Backend API",
        "TF-IDF Vectorization"
      ]
    },
    {
      title: "Lost and Found Portal",
      description: "A web application to report and retrieve lost and found items, facilitating easy communication between users.",
      tech: ["React", "Node.js", "MongoDB", "WebSocket"],
      link: "https://github.com/Sombabu25/Lost_and_Found_Portal",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Job Mart Portal",
      description: "Job portal application that connects job seekers with employers, featuring search, filter, and resume submission features.",
      tech: ["Full Stack", "Search", "Filters", "REST API"],
      link: "https://github.com/Sombabu25/Job-Mart",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Spotify Review Analysis",
      description: "Performed data analysis on Spotify reviews using SQL & Python and visualized trends with Matplotlib.",
      tech: ["Python", "SQL", "Data Analysis", "Matplotlib", "Pandas"],
      link: "https://github.com/Sombabu25/Spotify_Review_Analysis",
      icon: <Database className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 ${
                project.featured ? 'ring-2 ring-purple-500/50' : ''
              }`}
            >
              {project.featured && (
                <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full mb-4">
                  Featured
                </div>
              )}
              
              <div className="flex items-center mb-4">
                <div className="text-purple-400 mr-3">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-purple-200 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              {project.features && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-2 py-1 rounded text-xs text-purple-200 border border-purple-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
