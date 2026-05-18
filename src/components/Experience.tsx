import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCalendar, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const achievements = [
    {
      category: "Distributed Systems",
      icon: "🔄",
      items: [
        "Designed distributed event propagation using Redis Pub/Sub across ECS containers supporting 1000+ concurrent connections",
        "Architected WebSocket-based real-time communication for teams and patient messaging",
      ],
    },
    {
      category: "Performance Optimization",
      icon: "⚡",
      items: [
        "Reduced API latency by 45% and database load by 60% through Redis caching strategy",
        "Optimized MySQL queries reducing response times by 35% via indexing and query restructuring",
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      items: [
        "Designed and automated CI/CD pipelines with GitHub Actions reducing deployment time by 40%",
        "Engineered zero-downtime database migrations using Liquibase with rollback safety",
      ],
    },
    {
      category: "Cost Optimization",
      icon: "💰",
      items: [
        "Led migration from Datadog to Grafana/Prometheus stack reducing monitoring costs by 70%",
        "Improved observability and alerting while cutting operational expenses significantly",
      ],
    },
    {
      category: "Event-Driven Architecture",
      icon: "📨",
      items: [
        "Built automated billing workflows using AWS SQS + Lambda improving efficiency by 60%",
        "Designed fault-tolerant message handling with retry queues, DLQ, and circuit breakers",
      ],
    },
    {
      category: "Quality & Testing",
      icon: "✅",
      items: [
        "Achieved 80% code coverage with Jest reducing production bugs by 50%",
        "Implemented Docker containerization with comprehensive API documentation",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Experience
          </h2>

          <div className="max-w-5xl mx-auto">
            {/* Job Title */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              whileHover={{
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)",
                y: -4,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Software Engineer
                  </h3>
                  <p className="text-xl text-primary font-semibold mb-3">
                    DSmart Systems • Oncare360 Healthcare Platform
                  </p>
                  <div className="flex flex-wrap gap-6 text-gray-600">
                    <motion.span
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <FaCalendar className="text-primary" />
                      Jan 2024 – Present
                    </motion.span>
                    <motion.span
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.15 }}
                    >
                      <FaMapMarkerAlt className="text-primary" />
                      Hyderabad, India
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* Achievement Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((section, index) => (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border-l-4 border-primary cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 12px 24px rgba(59, 130, 246, 0.2)",
                      borderColor: "#3b82f6",
                    }}
                  >
                    <motion.h4
                      className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2"
                      whileHover={{ x: 4 }}
                    >
                      <motion.span
                        className="text-2xl"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        {section.icon}
                      </motion.span>
                      {section.category}
                    </motion.h4>
                    <ul className="space-y-2">
                      {section.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          className="flex gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + idx * 0.05,
                          }}
                        >
                          <motion.div
                            animate={isInView ? { rotate: [0, 360] } : {}}
                            transition={{
                              duration: 0.8,
                              delay: index * 0.1 + idx * 0.05,
                            }}
                          >
                            <FaCheckCircle
                              className="text-primary mt-1 flex-shrink-0"
                              size={16}
                            />
                          </motion.div>
                          <span className="text-sm text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
