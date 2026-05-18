import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Education
          </h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.25)",
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="bg-primary text-white p-4 rounded-lg flex-shrink-0"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaGraduationCap size={32} />
                </motion.div>
                <div className="flex-1">
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    Bachelor of Technology (BTech) in Electronics and
                    Communication Engineering
                  </motion.h3>
                  <motion.p
                    className="text-lg text-primary font-semibold mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 }}
                  >
                    Nalla Malla Reddy Engineering College
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-4 text-gray-600 mb-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <motion.span
                      className="flex items-center gap-2"
                      whileHover={{ x: 4 }}
                    >
                      <FaCalendar className="text-primary" />
                      2019 - 2023
                    </motion.span>
                    <motion.span
                      className="flex items-center gap-2"
                      whileHover={{ x: 4 }}
                    >
                      <FaMapMarkerAlt className="text-primary" />
                      Hyderabad, India
                    </motion.span>
                  </motion.div>
                  <motion.div
                    className="bg-blue-50 p-3 rounded border border-blue-200"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    whileHover={{
                      boxShadow: "0 8px 16px rgba(59, 130, 246, 0.2)",
                      scale: 1.02,
                    }}
                  >
                    <p className="text-gray-700 font-semibold">
                      CGPA: 7.34/10.0
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
