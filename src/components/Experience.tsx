import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const achievements = [
    {
      category: 'Set Up Infrastructure & Deployment',
      items: [
        'Integrated CI/CD pipeline for smooth and faster deployment and hosted the project on AWS EC2 instances.',
        'Configured Liquibase for automating database migrations through pull requests.',
      ],
    },
    {
      category: 'Optimized Monitoring & Performance',
      items: [
        'Migrated application monitoring from Datadog to Grafana and Prometheus, reducing monitoring costs by 70%.',
        'Implemented Redis caching for quick access to frequently requested data, improving response time.',
      ],
    },
    {
      category: 'Enhanced Communication & Collaboration',
      items: [
        'Integrated WebSocket to enable real-time group chats between care teams and healthcare personnel.',
        'Integrated VoIP call routing for seamless communication between care teams and patients.',
      ],
    },
    {
      category: 'Billing System Improvements',
      items: [
        'Automated billing processes using SQS and AWS Lambda to perform eligibility checks.',
        'Developed bulk billing functionality allowing the upload of Excel files to S3, where Lambda checks row constraints and eligibility before generating bills, resulting in a 60% increase in billing efficiency by reducing manual effort and processing time.',
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
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    FullStack Developer
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-2">
                    Dsmart - Worked on Oncare360 Healthcare platform
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <span className="flex items-center gap-2">
                      <FaCalendar className="text-primary" />
                      Jan 2024 – Present
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary" />
                      Hyderabad, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {achievements.map((section, index) => (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      {section.category}
                    </h4>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-gray-700 leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-700">
                  <span className="font-semibold">Also worked on integrating:</span> Twilio, Streamchat, Auth0
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
