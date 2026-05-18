import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaDatabase,
  FaServer,
  FaChartLine,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiGraphql,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      category: "Core Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
        { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
        { name: "REST APIs", icon: <FaServer className="text-green-500" /> },
        { name: "WebSockets", icon: <FaDatabase className="text-blue-500" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-600" /> },
      ],
    },
    {
      category: "Distributed Systems & Messaging",
      skills: [
        { name: "RabbitMQ", icon: <FaServer className="text-orange-600" /> },
        { name: "AWS SQS", icon: <FaAws className="text-orange-500" /> },
        { name: "Redis", icon: <FaDatabase className="text-red-500" /> },
        {
          name: "Microservices",
          icon: <FaServer className="text-indigo-600" />,
        },
        {
          name: "Event-Driven",
          icon: <FaChartLine className="text-purple-600" />,
        },
      ],
    },
    {
      category: "Databases",
      skills: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-600" />,
        },
        { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Prisma ORM", icon: <SiPrisma className="text-gray-700" /> },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: <FaAws className="text-orange-500" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "ECS", icon: <FaServer className="text-orange-500" /> },
        { name: "Lambda", icon: <FaServer className="text-orange-600" /> },
        { name: "CI/CD", icon: <FaGitAlt className="text-red-500" /> },
      ],
    },
    {
      category: "Observability & Monitoring",
      skills: [
        {
          name: "Prometheus",
          icon: <SiPrometheus className="text-orange-600" />,
        },
        { name: "Grafana", icon: <SiGrafana className="text-orange-500" /> },
        {
          name: "CloudWatch",
          icon: <FaChartLine className="text-orange-500" />,
        },
        { name: "Datadog", icon: <FaChartLine className="text-purple-600" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.12 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <motion.span
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={
                      isInView
                        ? { scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      delay: categoryIndex * 0.12,
                      repeat: Infinity,
                    }}
                  />
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="bg-blue-50 text-gray-900 px-4 py-2 rounded-full font-medium text-sm border border-blue-200 hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center gap-2 cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.12 + skillIndex * 0.05,
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -4,
                        boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.span
                        className="text-lg"
                        whileHover={{
                          rotate: 360,
                          transition: { duration: 0.6 },
                        }}
                      >
                        {skill.icon}
                      </motion.span>
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8 max-w-4xl mx-auto border border-blue-200"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Specializations & Core Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {[
                "Distributed Systems",
                "Event-Driven Architecture",
                "Real-Time Systems",
                "Microservices",
                "System Design",
                "Performance Optimization",
                "Database Tuning",
                "CI/CD Pipelines",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white text-primary font-semibold rounded-full border-2 border-primary shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="text-left">
              <p className="text-gray-700 mb-3">
                <span className="font-semibold text-primary">
                  AWS Services:
                </span>{" "}
                EC2, ECS, Lambda, S3, SQS, ECR, Auto Scaling, CloudWatch, VPC,
                IAM, RDS, Secrets Manager
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-primary">
                  Additional Skills:
                </span>{" "}
                REST APIs, GraphQL, Authentication, Authorization, Testing
                (Jest, Mocha), Git, Docker, Logging & Monitoring
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
