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
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-4 rounded-lg">
                  <FaGraduationCap size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    BTech in Electronic and Communication
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-3">
                    Nalla Malla Reddy Engineering College
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                    <span className="flex items-center gap-2">
                      <FaCalendar className="text-primary" />
                      2019 - 2023
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary" />
                      Hyderabad, India
                    </span>
                  </div>
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
