import React from 'react';
import { Database, Network, Layers, Cpu } from 'lucide-react';

const Courses = () => {
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

  return (
    <section id="courses" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Core Computer Science Courses
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {subjectCourses.map((course, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${course.color} mb-4`}>
                <div className="text-white">
                  {course.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {course.title}
              </h3>
              
              <p className="text-purple-200 mb-4 text-sm leading-relaxed">
                {course.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-purple-300">Key Topics:</h4>
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic, topicIndex) => (
                    <span 
                      key={topicIndex}
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-2 py-1 rounded text-xs text-purple-200 border border-purple-400/30"
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
    </section>
  );
};

export default Courses;
