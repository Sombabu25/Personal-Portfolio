import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Jawaharlal Nehru Technological University Kakinada",
      period: "2022 - 2026 (Expected)",
      details: [
        "CGPA: 7.32/10",
        "Relevant Coursework: Data Structures, Algorithms, Database Management, Computer Networks",
        "Active member of Coding Club and Technical Events"
      ]
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Himalayan Pyramid College, Birganj",
      period: "2020 - 2022",
      details: [
        "Percentage: 2.91/4",
        "Stream: Mathematics, Physics, Chemistry",
        "Board: National Examination Board, Nepal"
      ]
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "Birganj Academy, Birganj",
      period: "2010 - 2020",
      details: [
        "CGPA: 3.35/4",
        "Board: Central Board of Secondary Education (CBSE)",
        "School Topper in Mathematics and Science"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="text-purple-400 mr-4 mt-1">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center text-purple-300 mb-2">
                    <Award className="w-4 h-4 mr-2" />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center text-purple-200 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{edu.period}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {edu.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-purple-200 text-sm flex items-start">
                        <span className="text-purple-400 mr-2 mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
