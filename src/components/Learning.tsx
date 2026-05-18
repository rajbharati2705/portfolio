import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaArrowRight } from 'react-icons/fa';

const Learning = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const learningItems = [
    {
      title: 'Java + Spring Boot',
      description: 'Learning enterprise backend development patterns using Spring ecosystem',
    },
    {
      title: 'Kubernetes & Container Orchestration',
      description: 'Exploring container orchestration beyond Docker for production scaling',
    },
    {
      title: 'System Design at Scale',
      description: 'Practicing scalable architecture patterns and system design concepts',
    },
    {
      title: 'Distributed Systems Patterns',
      description: 'Studying consensus, eventual consistency, and fault tolerance patterns',
    },
  ];

  return (
    <section id="learning" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Currently Learning
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Continuous growth and exploring new technologies to stay ahead in backend engineering
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {learningItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-primary hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <FaGraduationCap className="text-primary text-2xl flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      {item.title}
                      <FaArrowRight size={12} className="text-primary" />
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Learning;
