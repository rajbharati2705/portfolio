import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaHeartbeat, FaExchangeAlt, FaLock, FaChartBar } from 'react-icons/fa';

const ProductionContext = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const domains = [
    {
      icon: <FaHeartbeat className="text-red-600" size={28} />,
      title: "Healthcare SaaS",
      description: "Building systems for medical teams and patient operations",
    },
    {
      icon: <FaExchangeAlt className="text-blue-600" size={28} />,
      title: "Real-Time Communication",
      description: "WebSocket-based messaging and live updates at scale",
    },
    {
      icon: <FaChartBar className="text-green-600" size={28} />,
      title: "Async Workflows",
      description: "Event-driven architectures with reliable message processing",
    },
    {
      icon: <FaLock className="text-purple-600" size={28} />,
      title: "Performance Critical APIs",
      description: "Sub-100ms latency systems handling thousands of requests",
    },
  ];

  return (
    <section id="production-context" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Production Experience
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary"
              >
                <div className="flex justify-center mb-3">{domain.icon}</div>
                <h4 className="text-base font-bold text-gray-900 text-center mb-2">
                  {domain.title}
                </h4>
                <p className="text-sm text-gray-600 text-center">
                  {domain.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionContext;
