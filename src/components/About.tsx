import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaServer, FaDatabase, FaCloud, FaChartLine } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const expertise = [
    {
      icon: <FaServer className="text-blue-600" size={24} />,
      title: "Backend Systems",
      description: "Node.js, Express, REST APIs, GraphQL, WebSockets",
    },
    {
      icon: <FaChartLine className="text-green-600" size={24} />,
      title: "Distributed Architecture",
      description: "Microservices, Event-Driven, Real-Time Systems",
    },
    {
      icon: <FaDatabase className="text-purple-600" size={24} />,
      title: "Database Optimization",
      description: "MySQL, PostgreSQL, MongoDB, Redis, Performance Tuning",
    },
    {
      icon: <FaCloud className="text-orange-600" size={24} />,
      title: "Cloud Infrastructure",
      description: "AWS, Docker, Kubernetes, CI/CD, DevOps",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Backend Engineer with 2+ years of experience building scalable
              distributed systems using Node.js, TypeScript, AWS, Redis, and
              PostgreSQL. Passionate about event-driven systems, real-time
              communication, and solving performance bottlenecks.
            </p>

            {/* What I Enjoy Building - Personal Touch */}
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-primary">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                What I Enjoy Building
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Distributed Systems",
                  "Real-Time Communication",
                  "Event-Driven Workflows",
                  "High Performance APIs",
                  "Database Optimization",
                  "Scalable Architectures",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-gray-700 font-medium"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What I Work With */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
