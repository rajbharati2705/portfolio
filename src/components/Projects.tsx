import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaArrowRight } from "react-icons/fa";

const AnimatedDiagram = ({ diagram }: { diagram: string }) => {
  const lines = diagram.trim().split("\n");

  return (
    <div className="text-sm font-mono text-gray-700 text-center whitespace-pre-wrap break-words">
      {lines.map((line, idx) => {
        const isArrow =
          line.trim() === "↓" || line.trim() === "↙" || line.trim() === "↘";

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
          >
            {isArrow ? (
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: idx * 0.15,
                }}
                className="text-primary font-bold text-lg"
              >
                {line}
              </motion.div>
            ) : (
              <div>{line}</div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "API Monitoring & Observability Platform",
      problem:
        "Design a fault-tolerant monitoring platform for API uptime, failures, and latency tracking at scale.",
      metrics: [
        { value: "10K+", label: "metrics/min" },
        { value: "~100ms", label: "latency" },
        { value: "99.9%", label: "target uptime" },
        { value: "DLQ", label: "handling" },
      ],
      diagram: `
API Requests
     ↓
RabbitMQ Queue
     ↓
Worker Threads
  ↙       ↘
MongoDB  PostgreSQL
     ↓
WebSocket Dashboard
      `,
      highlights: [
        "10,000+ metrics/minute processing",
        "Sub-100ms latency with caching",
        "DLQ for failed message handling",
        "Circuit breaker patterns",
        "99.9% uptime SLA",
      ],
      technicalDecisions: [
        {
          decision: "Why RabbitMQ?",
          reasoning:
            "Needed reliable retries + DLQ support for metric processing. SQS was considered but RabbitMQ provided more control for routing.",
        },
        {
          decision: "Why MongoDB + PostgreSQL?",
          reasoning:
            "MongoDB for high-throughput metrics ingestion, PostgreSQL for relational analytics queries.",
        },
        {
          decision: "Why WebSockets?",
          reasoning:
            "Real-time updates without polling overhead. Redis Pub/Sub broadcasts events across dashboard connections.",
        },
      ],
      techStack: [
        "Node.js",
        "Express.js",
        "RabbitMQ",
        "MongoDB",
        "PostgreSQL",
        "WebSockets",
        "Docker",
      ],
      github: "https://github.com/rajbharati2705/API-Monitoring-Service",
    },
    {
      title: "SkyScanner - Flight Search and Booking Backend",
      problem:
        "Design a scalable flight booking backend supporting concurrent search and booking workflows.",
      metrics: [
        { value: "500+", label: "concurrent" },
        { value: "50%", label: "faster queries" },
        { value: "99.5%", label: "reliability" },
        { value: "ACID", label: "compliant" },
      ],
      diagram: `
Search Query
     ↓
Microservice Router
     ↓
Sequelize ORM
     ↓
MySQL Database
     ↓
Flight Results
      `,
      highlights: [
        "500+ concurrent request handling",
        "50% query optimization through indexing",
        "99.5% reliability with failover",
        "ACID transaction compliance",
        "Deadlock prevention strategies",
      ],
      technicalDecisions: [
        {
          decision: "Why Sequelize ORM?",
          reasoning:
            "Transaction safety for bookings, association management for complex queries, SQL injection prevention.",
        },
        {
          decision: "Why MySQL over NoSQL?",
          reasoning:
            "Booking data requires strict consistency and ACID properties. Relational model ensures referential integrity.",
        },
        {
          decision: "Handling concurrent requests?",
          reasoning:
            "Connection pooling, query optimization through indexing, asynchronous logging for write operations.",
        },
      ],
      techStack: [
        "Node.js",
        "Express.js",
        "MySQL",
        "Sequelize ORM",
        "REST APIs",
      ],
      github: "https://github.com/rajbharati2705/Flight-booking-service",
    },
    {
      title: "SecureSketch - Collaborative Whiteboard",
      problem:
        "Enable real-time collaborative drawing with synchronized cursor tracking for multiple users.",
      metrics: [
        { value: "100ms", label: "sync latency" },
        { value: "50+", label: "concurrent users" },
        { value: "Monorepo", label: "architecture" },
        { value: "Type-safe", label: "TypeScript" },
      ],
      diagram: `
Next.js Frontend
     ↓
WebSocket Server
     ↓
Express Backend
     ↓
PostgreSQL + Prisma
      `,
      highlights: [
        "Real-time multi-user collaboration",
        "Synchronized cursor tracking <100ms",
        "Monorepo with shared types",
        "Type-safe with end-to-end TypeScript",
        "CI/CD automation with GitHub Actions",
      ],
      technicalDecisions: [
        {
          decision: "Why WebSockets?",
          reasoning:
            "Persistent connection enables real-time cursor sync. Polling would add latency and overhead.",
        },
        {
          decision: "Why Prisma ORM?",
          reasoning:
            "Type-safe queries with auto-generated types. Better developer experience for state persistence across frontend and backend.",
        },
        {
          decision: "Real-time sync architecture?",
          reasoning:
            "WebSocket events broadcast to connected clients. State stored in PostgreSQL for persistence and recovery.",
        },
      ],
      techStack: [
        "Next.js",
        "TypeScript",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "WebSockets",
      ],
      github: "#",
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
            Featured Projects
          </h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-lg shadow-lg border-l-4 border-primary overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.25)",
                }}
              >
                {/* Header with Title */}
                <motion.div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.problem}</p>

                  {/* Metrics Badges */}
                  <div className="flex flex-wrap gap-3">
                    {project.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metric.label}
                        className="bg-white rounded-lg px-4 py-2 shadow-sm border border-blue-200"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.15 + metricIndex * 0.05,
                        }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 8px 16px rgba(59, 130, 246, 0.2)",
                        }}
                      >
                        <p className="text-lg font-bold text-primary">
                          {metric.value}
                        </p>
                        <p className="text-xs text-gray-600 font-semibold">
                          {metric.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Content Area */}
                <div className="p-6 space-y-6">
                  {/* Architecture Diagram */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
                  >
                    <p className="text-sm font-semibold text-gray-600 mb-4">
                      Architecture
                    </p>
                    <motion.div
                      className="bg-gradient-to-b from-gray-50 to-white rounded-lg p-6 border border-gray-200"
                      whileHover={{
                        borderColor: "#3b82f6",
                        boxShadow: "0 8px 16px rgba(59, 130, 246, 0.1)",
                      }}
                    >
                      <AnimatedDiagram diagram={project.diagram} />
                    </motion.div>
                  </motion.div>

                  {/* Engineering Highlights */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.15 }}
                  >
                    <p className="text-sm font-semibold text-gray-600 mb-3">
                      Engineering Highlights
                    </p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <motion.li
                          key={highlight}
                          className="text-sm text-gray-700 flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.15 + 0.15 + highlightIndex * 0.05,
                          }}
                        >
                          <motion.div
                            animate={isInView ? { rotate: [0, 360] } : {}}
                            transition={{
                              duration: 0.6,
                              delay: index * 0.15 + highlightIndex * 0.05,
                            }}
                          >
                            <FaArrowRight
                              size={12}
                              className="text-primary mt-1 flex-shrink-0"
                            />
                          </motion.div>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Technical Decisions */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                  >
                    <p className="text-sm font-semibold text-gray-600 mb-3">
                      Technical Decisions
                    </p>
                    <div className="space-y-3">
                      {project.technicalDecisions.map((decision, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.15 + 0.2 + idx * 0.05,
                          }}
                          whileHover={{
                            x: 4,
                            boxShadow: "0 8px 16px rgba(59, 130, 246, 0.15)",
                          }}
                        >
                          <p className="text-sm font-semibold text-gray-900 mb-2">
                            {decision.decision}
                          </p>
                          <p className="text-sm text-gray-700">
                            {decision.reasoning}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Tech Stack & CTA */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.25 }}
                  >
                    <p className="text-sm font-semibold text-gray-600 mb-3">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-primary text-xs font-semibold rounded-full border border-blue-200"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.15 + 0.25 + techIndex * 0.04,
                          }}
                          whileHover={{
                            scale: 1.1,
                            boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Multi-Button CTA */}
                    <div className="flex flex-wrap gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-secondary transition-colors shadow-md"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.15 + 0.3,
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub size={16} />
                        GitHub
                      </motion.a>
                    </div>
                  </motion.div>
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
