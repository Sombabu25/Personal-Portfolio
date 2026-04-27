import React from 'react';
import { Mail, Phone, Download, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/Sombabu_Patel_Resume.pdf`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Sombabu_Patel_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      // Fallback to opening in new tab if download fails
      window.open(`${process.env.PUBLIC_URL}/Sombabu_Patel_Resume.pdf`, '_blank');
    }
  };
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "sombabu25@outlook.com",
      href: "mailto:sombabu25@outlook.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8210787484",
      href: "tel:+918210787484"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Kakinada, Andhra Pradesh, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/Sombabu25"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sombabu-patel"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center text-purple-200">
                    <div className="text-purple-400 mr-3">
                      {contact.icon}
                    </div>
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        className="hover:text-purple-300 transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span>{contact.value}</span>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                      aria-label={social.label}
                    >
                      <div className="text-white">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Resume Download */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">Download Resume</h3>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-400/30">
                  <Download className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  
                  <p className="text-purple-200 mb-6">
                    Download my resume to learn more about my experience, skills, and projects.
                  </p>
                  
                  <button
                    onClick={handleDownloadResume}
                    className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 cursor-pointer"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </button>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-purple-300 text-sm">
                  Available in PDF format
                </p>
              </div>
            </div>
          </div>
          
          {/* Message Section */}
          <div className="mt-8 text-center">
            <p className="text-purple-200 text-lg">
              I'm always interested in hearing about new opportunities and exciting projects.
              Feel free to reach out if you'd like to collaborate!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
