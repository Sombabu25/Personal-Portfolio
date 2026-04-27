import React, { useState, useEffect, useRef } from 'react';
import Background3D from "./components/Background3D";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

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

  // Loading animation
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative inline-block">
            <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <div className="w-8 h-8 text-purple-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">✨</div>
          </div>
          <h2 className="text-xl text-white font-semibold animate-pulse">Loading Portfolio...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* 3D Background */}
      <Background3D />
      
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

      {/* Header */}
      <Header scrollToSection={scrollToSection} />

      {/* Navigation */}
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main Content */}
      <main className="relative z-10">
        <div ref={el => sectionRefs.current['about'] = el}>
          <About />
        </div>
        
        <div ref={el => sectionRefs.current['skills'] = el}>
          <Skills />
        </div>
        
        <div ref={el => sectionRefs.current['projects'] = el}>
          <Projects />
        </div>
        
        <div ref={el => sectionRefs.current['courses'] = el}>
          <Courses />
        </div>
        
        <div ref={el => sectionRefs.current['certifications'] = el}>
          <Certifications />
        </div>
        
        <div ref={el => sectionRefs.current['education'] = el}>
          <Education />
        </div>
        
        <div ref={el => sectionRefs.current['contact'] = el}>
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
