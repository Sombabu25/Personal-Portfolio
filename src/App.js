import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Database, Globe, Award, GraduationCap, User } from 'lucide-react';
import profileImage from './assets/profile.jpg'; // Ensure this path is correct

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Movie Ticket Booking App",
      description: "A full-stack web app developed using Node.js, Express.js, and MongoDB with user authentication and booking history.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/Sombabu25/Movie-Ticket-Booking-App",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Resume Matcher",
      description: "Built a full-stack app using Flask to match resumes with job descriptions using NLP (TF-IDF & Cosine Similarity).",
      tech: ["Flask", "Python", "NLP"],
      link: "https://github.com/Sombabu25/Resume_Matcher",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Lost and Found Portal",
      description: "A web application to report and retrieve lost and found items, facilitating easy communication between users.",
      tech: ["Web Development", "Database"],
      link: "https://github.com/Sombabu25/Lost_and_Found_Portal",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Job Mart",
      description: "Job portal application that connects job seekers with employers, featuring search, filter, and resume submission features.",
      tech: ["Full Stack", "Search"],
      link: "https://github.com/Sombabu25/Job-Mart",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Spotify Review Analysis",
      description: "Performed data analysis on Spotify reviews using SQL & Python and visualized trends with Matplotlib.",
      tech: ["Python", "SQL", "Data Analysis"],
      link: "https://github.com/Sombabu25/Spotify_Review_Analysis",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Phonebook Management System",
      description: "CLI-based Python application to store, search, list, and delete contacts efficiently using dictionary data structures.",
      tech: ["Python", "CLI"],
      link: "https://github.com/Sombabu25/Phonebook_Management_System",
      icon: <Code className="w-6 h-6" />
    }
  ];

  const certifications = [
    {
      title: "Crash Course on Python",
      issuer: "Google",
      link: "https://coursera.org/verify/C4JI8SJ23QRAJ"
    },
    {
      title: "Introduction to Git and GitHub",
      issuer: "Google",
      link: "https://coursera.org/verify/FRGCKNDSEGBN"
    },
    {
      title: "Intro to Front-End Development",
      issuer: "Meta",
      link: "https://coursera.org/verify/8QYZR7JA9BCZ"
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "C++", "SQL", "JavaScript", "HTML", "CSS"] },
    { category: "Web Technologies", items: ["Flask", "REST APIs", "XML/JSON"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "PyCharm", "Jupyter"] },
    { category: "Data Tools", items: ["Pandas", "NumPy", "Matplotlib", "Excel"] },
    { category: "Soft Skills", items: ["Teamwork", "Communication", "Detail-Oriented"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="relative inline-block mb-6 group">
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 shadow-xl shadow-purple-900/30 group-hover:shadow-purple-500/50 transition-all duration-500">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 blur-sm opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 group-hover:border-purple-400 transition-all duration-300">
                  <img 
  src={profileImage} 
  alt="Sombabu Patel"
  className="w-full h-full object-cover animate-float transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
/>

                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Sombabu Patel
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">
              Computer Science Student | Python & Web Developer
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Sombabu25"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/sombabu-patel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8 py-4">
            {[
              { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
              { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
              { id: 'projects', label: 'Projects', icon: <Globe className="w-4 h-4" /> },
              { id: 'certifications', label: 'Certifications', icon: <Award className="w-4 h-4" /> },
              { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
              { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.icon}
                <span className="hidden md:inline">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              About Me
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-lg leading-relaxed text-gray-300">
                I'm a Computer Science Engineering student passionate about solving problems and building full-stack applications. 
                I specialize in Python, SQL, and web development with hands-on experience in version control, REST APIs, and data analysis tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <div
                  key={skillGroup.category}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-purple-600/20 rounded-lg text-purple-400">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>View on GitHub</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-lg font-semibold text-white">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-2">Issued by {cert.issuer}</p>
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <span className="text-sm">View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Education
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-green-600/20 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    B.Tech in Computer Science and Engineering
                  </h3>
                  <p className="text-gray-300">
                    Jawaharlal Nehru Technological University, Kakinada
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="bg-purple-600/20 px-4 py-2 rounded-lg border border-purple-500/30">
                  <span className="text-purple-300 font-semibold">CGPA: 7.29 / 10</span>
                </div>
                <div className="bg-blue-600/20 px-4 py-2 rounded-lg border border-blue-500/30">
                  <span className="text-blue-300">2022 – 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-red-600/20 rounded-lg">
                    <Mail className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-300">sombabu25@outlook.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-600/20 rounded-lg">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+91 8210787484</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex items-center justify-center">
<a
  href="/Sombabu_Patel_Resume.pdf"
  download="Sombabu_Patel_Resume.pdf"
  className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
>
  <Download className="w-5 h-5" />
  <span className="font-semibold">Download Resume</span>
</a>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Sombabu Patel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
