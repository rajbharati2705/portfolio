import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const EngineeringChallenges = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const challenges = [
    {
      title: 'Scaling WebSockets Across Containers',
      problem: 'WebSocket events failed when requests distributed across multiple ECS instances.',
      solution: 'Implemented Redis Pub/Sub distributed event propagation system.',
      result: 'Enabled horizontal scaling supporting 1000+ concurrent users seamlessly.',
      impact: '1000+ concurrent connections',
      engineering: 'Redis Pub/Sub • AWS ECS • Message Broadcasting',
      icon: '🔄',
    },
    {
      title: 'API Performance Under Load',
      problem: 'APIs hitting database on every request causing 100-200ms latency and database strain.',
      solution: 'Implemented intelligent Redis caching with selective cache invalidation patterns.',
      result: 'Reduced latency to 20-30ms and cut database load by 60%.',
      impact: '45% latency reduction',
      engineering: 'Redis Caching • Query Optimization • Cache Invalidation',
      icon: '⚡',
    },
    {
      title: 'Cost Optimization Without Sacrificing Observability',
      problem: 'Datadog monitoring costs growing exponentially while needing better alerting.',
      solution: 'Migrated to open-source Grafana + Prometheus stack with custom dashboards.',
      result: 'Reduced monitoring costs by 70% while improving alerting and system visibility.',
      impact: '70% cost reduction',
      engineering: 'Grafana • Prometheus • Alerting Rules • Custom Dashboards',
      icon: '💰',
    },
    {
      title: 'Real-Time Billing at Scale',
      problem: 'Manual billing processes slow and error-prone. Needed to process thousands of records.',
      solution: 'Built event-driven billing using AWS SQS + Lambda with fault tolerance.',
      result: 'Automated 100% of billing workflows improving efficiency by 60%.',
      impact: '60% efficiency improvement',
      engineering: 'AWS SQS • Lambda • Event-Driven Architecture • Error Handling',
      icon: '📨',
    },
  ];

  return (
    <section id="challenges" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Engineering Challenges Solved
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Real-world problems tackled and their engineering solutions
          </p>

          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-primary"
              >
                <div className="flex gap-4 mb-6">
                  <span className="text-4xl">{challenge.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {challenge.title}
                  </h3>
                </div>

                {/* Three-Card Layout: Problem | Solution | Result */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {/* Problem Card */}
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                    <p className="text-sm font-bold text-red-700 mb-2 flex items-center gap-2">
                      🔴 PROBLEM
                    </p>
                    <p className="text-gray-700 text-sm">{challenge.problem}</p>
                  </div>

                  {/* Solution Card */}
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-sm font-bold text-blue-700 mb-2 flex items-center gap-2">
                      🛠 SOLUTION
                    </p>
                    <p className="text-gray-700 text-sm">{challenge.solution}</p>
                  </div>

                  {/* Result Card */}
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <p className="text-sm font-bold text-green-700 mb-2 flex items-center gap-2">
                      📈 RESULT
                    </p>
                    <p className="text-gray-700 text-sm font-semibold text-center mt-2">
                      {challenge.impact}
                    </p>
                    <p className="text-gray-600 text-xs text-center mt-1">
                      {challenge.result}
                    </p>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-600 mb-2">
                    Technologies Used
                  </p>
                  <p className="text-sm text-gray-700">{challenge.engineering}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringChallenges;
