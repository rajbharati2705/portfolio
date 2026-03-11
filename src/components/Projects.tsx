import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'SecureSketch',
      description: 'Developed a real-time collaborative whiteboard with WebSocket-based live editing and synchronized cursor tracking for seamless multi-user interactions.',
      features: [
        'Real-time collaborative whiteboard',
        'WebSocket-based live editing with synchronized cursor tracking',
        'Monorepo architecture for optimized code sharing',
        'Scalable backend with PostgreSQL, Prisma, and Express',
        'GitHub Actions for CI/CD',
      ],
      techStack: [
        'Next.js',
        'TypeScript',
        'Fabric.js',
        'Zustand',
        'Zod',
        'WebSockets',
        'Express.js',
        'Node.js',
        'PostgreSQL',
        'Prisma',
        'GitHub Actions',
        'Turborepo',
      ],
      github: '#',
      live: '#',
    },
    {
      title: 'SkyScanner - Flight Search and Booking Backend',
      description: 'Developed a scalable backend for flight search and booking using a microservices architecture with robust error handling and optimized performance.',
      features: [
        'Microservices architecture for scalability',
        'Robust error handling and deadlock resolution',
        'Optimized indexing for better performance',
        'Sequelize ORM with MySQL for data integrity',
      ],
      techStack: ['Node.js', 'Express.js', 'MySQL', 'Sequelize'],
      github: '#',
      live: '#',
    },
    {
      title: 'Pet Marketplace',
      description: 'Developed a dynamic e-commerce platform with real-time authentication, secure payments, and optimized data fetching using GraphQL.',
      features: [
        'Dynamic e-commerce interfaces using Angular',
        'Real-time Firebase authentication and authorization',
        'Scalable NestJS APIs with GraphQL integration',
        'Stripe integration for secure payments',
        'Database management with Prisma and PostgreSQL',
      ],
      techStack: [
        'Angular',
        'NestJS',
        'PostgreSQL',
        'Prisma',
        'Firebase',
        'GraphQL',
        'Stripe',
        'Cloudways',
      ],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Key Features:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      <FaGithub size={20} />
                      <span className="text-sm font-semibold">Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span className="text-sm font-semibold">Live Demo</span>
                    </a>
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

export default Projects;
