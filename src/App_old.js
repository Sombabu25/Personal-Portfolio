import React, { useState, useEffect, useRef } from 'react';
import Background3D from "./components/Background3D";
import "./index.css";

import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ExternalLink, 
  Code, 
  Database, 
  Globe, 
  Award, 
  GraduationCap, 
  User, 
  Sparkles, 
  Star, 
  Zap,
  ShoppingCart,
  Cpu,
  Network,
  Layers
} from 'lucide-react';
import profileImage from './assets/profile.jpg';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const sectionRefs = useRef({});

  // Mouse move effect for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll animation and intersection observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, observerOptions);

    // Observe all sections
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Enhanced projects data with detailed descriptions
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

  // Subject Courses Data
  const subjectCourses = [
    {
      title: "Database Management Systems (DBMS)",
      description: "Comprehensive understanding of database design, SQL queries, normalization, and transaction management.",
      icon: <Database className="w-8 h-8" />,
      topics: ["SQL & NoSQL", "Normalization", "ACID Properties", "Indexing", "Transaction Management"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Computer Networks (CN)",
      description: "In-depth knowledge of network protocols, architectures, security, and data communication principles.",
      icon: <Network className="w-8 h-8" />,
      topics: ["TCP/IP Protocol", "Network Security", "Routing Algorithms", "OSI Model", "Wireless Networks"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Structures & Algorithms (DSA)",
      description: "Strong foundation in algorithm design, complexity analysis, and efficient data structure implementation.",
      icon: <Layers className="w-8 h-8" />,
      topics: ["Sorting Algorithms", "Graph Theory", "Dynamic Programming", "Tree Structures", "Complexity Analysis"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Operating Systems (OS)",
      description: "Understanding of process management, memory allocation, file systems, and system architecture.",
      icon: <Cpu className="w-8 h-8" />,
      topics: ["Process Scheduling", "Memory Management", "File Systems", "Deadlocks", "Virtual Memory"],
      color: "from-orange-500 to-red-500"
    }
  ];

  // Loading animation
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative inline-block">
            <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <Sparkles className="w-8 h-8 text-purple-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>
          <h2 className="text-xl text-white font-semibold animate-pulse">Loading Portfolio...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.15), transparent 80%)
          `
        }}
      />
      
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Header with Enhanced Animations */}
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
            
            {/* FIXED: No square line with animation */}
            <div className="mb-8">
              <div className="text-xl md:text-2xl font-medium">
                <span className="typewriter-text bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
                  Computer Science Student | Full Stack Developer
                </span>
                <span className="typewriter-cursor">|</span>
              </div>
            </div>

            {/* Animated Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { icon: <Github className="w-6 h-6" />, href: "https://github.com/Sombabu25", label: "GitHub" },
                { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/sombabu-patel", label: "LinkedIn" },
                { icon: <Mail className="w-6 h-6" />, href: "mailto:sombabu25@outlook.com", label: "Email" }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                  <span className="font-medium">{social.label}</span>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Navigation */}
      <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-xl">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-4 py-4 flex-wrap">
            {[
              { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
              { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
              { id: 'courses', label: 'Courses', icon: <GraduationCap className="w-4 h-4" /> },
              { id: 'projects', label: 'Projects', icon: <Globe className="w-4 h-4" /> },
              { id: 'certifications', label: 'Certifications', icon: <Award className="w-4 h-4" /> },
              { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
              { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex items-center space-x-2 px-5 py-3 rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section 
        id="about" 
        ref={el => sectionRefs.current.about = el}
        className="py-20 relative"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                About Me
              </span>
              <Sparkles className="w-8 h-8 text-yellow-400 inline-block ml-4 animate-spin-slow" />
            </h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
              <p className="text-xl leading-relaxed text-gray-300 text-center">
                I'm a passionate <span className="text-purple-400 font-semibold">Computer Science Engineering student</span> with expertise in 
                building <span className="text-pink-400 font-semibold">full-stack applications</span> and solving complex problems. 
                I specialize in <span className="text-blue-400 font-semibold">MERN stack development</span>, <span className="text-green-400 font-semibold">Python programming</span>, 
                and <span className="text-yellow-400 font-semibold">data analysis</span>.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {[
                  { number: "6+", label: "Projects" },
                  { number: "15+", label: "Technologies" },
                  { number: "3", label: "Certifications" },
                  { number: "2+", label: "Years Experience" }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-bold text-purple-400">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        ref={el => sectionRefs.current.skills = el}
        className="py-20 bg-black/20 relative"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Technical Skills
              </span>
              <Zap className="w-8 h-8 text-yellow-400 inline-block ml-4 animate-bounce" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div
                  key={skillGroup.category}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="group/skill px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 rounded-xl text-sm border border-purple-500/30 hover:border-purple-400 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
                      >
                        {skill}
                        <Sparkles className="w-3 h-3 text-yellow-400 inline-block ml-1 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Subject Courses Section */}
      <section 
        id="courses" 
        ref={el => sectionRefs.current.courses = el}
        className="py-20 relative"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Core Computer Science Courses
              </span>
              <GraduationCap className="w-8 h-8 text-yellow-400 inline-block ml-4 animate-bounce" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subjectCourses.map((course, index) => (
                <div
                  key={course.title}
                  className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${course.color} rounded-2xl text-white group-hover:scale-110 transition-transform duration-300`}>
                      {course.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {course.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-semibold text-yellow-400">Key Topics Covered:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 rounded-xl text-sm border border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300 hover:scale-105"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        ref={el => sectionRefs.current.projects = el}
        className="py-20 bg-black/20 relative"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Featured Projects
              </span>
              <Star className="w-8 h-8 text-yellow-400 inline-block ml-4 animate-pulse" />
            </h2>
            
            {/* Featured Projects - 3 per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {projects.filter(p => p.featured).map((project, index) => (
                <div
                  key={project.title}
                  className="group relative bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  {/* Featured Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Featured</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-white/10 rounded-xl text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Special Features for Featured Projects */}
                  {project.features && (
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-semibold text-yellow-400">Key Features:</span>
                      </div>
                      <div className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                            <span className="text-xs text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs border border-blue-500/30 hover:bg-blue-600/40 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm"
                  >
                    <span className="font-semibold">View Project</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>

            {/* Other Projects Grid - 3 per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <div
                  key={project.title}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-purple-600/20 rounded-lg text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
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
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group/link text-sm"
                  >
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section 
        id="certifications" 
        ref={el => sectionRefs.current.certifications = el}
        className="py-20 bg-black/20 relative"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Certifications
              </span>
              <Award className="w-8 h-8 text-yellow-400 inline-block ml-4 animate-bounce" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-yellow-600/20 rounded-lg text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-4">Issued by {cert.issuer}</p>
                  <div className="flex items-center space-x-2 text-yellow-400 group-hover:space-x-3 transition-all duration-300">
                    <span className="text-sm font-medium">View Certificate</span>
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section 
        id="education" 
        ref={el => sectionRefs.current.education = el}
        className="py-20 relative"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Education
              </span>
              <GraduationCap className="w-8 h-8 text-green-400 inline-block ml-4 animate-bounce" />
            </h2>
            <div className="bg-gradient-to-br from-green-600/10 via-purple-600/10 to-blue-600/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10">
              <div className="flex items-center space-x-6 mb-6">
                <div className="p-4 bg-green-600/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-12 h-12 text-green-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    B.Tech in Computer Science and Engineering
                  </h3>
                  <p className="text-xl text-gray-300">
                    Jawaharlal Nehru Technological University, Kakinada
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="bg-purple-600/20 px-6 py-3 rounded-xl border border-purple-500/30 hover:scale-105 transition-transform duration-300">
                  <span className="text-purple-300 font-semibold text-lg">CGPA: 7.30 / 10</span>
                </div>
                <div className="bg-blue-600/20 px-6 py-3 rounded-xl border border-blue-500/30 hover:scale-105 transition-transform duration-300">
                  <span className="text-blue-300 text-lg font-semibold">2022 – 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={el => sectionRefs.current.contact = el}
        className="py-20 bg-black/20 relative"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Get In Touch
              </span>
              <Mail className="w-8 h-8 text-red-400 inline-block ml-4 animate-pulse" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-500 hover:scale-105">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="p-3 bg-red-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <a href="mailto:sombabu25@outlook.com" className="text-gray-300 hover:text-red-400 transition-colors">
                        sombabu25@outlook.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="p-3 bg-green-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Phone</h3>
                      <a href="tel:+918210787484" className="text-gray-300 hover:text-green-400 transition-colors">
                        +91 8210787484
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Download */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 flex items-center justify-center">
                <a
                  href="/Sombabu_Patel_Resume.pdf"
                  download="Sombabu_Patel_Resume.pdf"
                  className="group flex items-center space-x-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <Download className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xl font-semibold">Download Resume</span>
                  <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black/50 py-12 border-t border-white/10 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center space-x-8 mb-6">
              {[
                { icon: <Github className="w-6 h-6" />, href: "https://github.com/Sombabu25", label: "GitHub" },
                { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/sombabu-patel", label: "LinkedIn" },
                { icon: <Mail className="w-6 h-6" />, href: "mailto:sombabu25@outlook.com", label: "Email" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-xl hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-lg">
              © 2025 Sombabu Patel. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;