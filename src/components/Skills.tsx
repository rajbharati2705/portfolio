import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaChartLine,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiGraphql,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiHtml5,
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact className="text-cyan-500" /> },
        { name: 'Angular', icon: <FaAngular className="text-red-600" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
        { name: 'HTML', icon: <SiHtml5 className="text-orange-600" /> },
        { name: 'CSS', icon: <FaReact className="text-blue-600" /> },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
        { name: 'Express.js', icon: <SiExpress className="text-gray-700" /> },
        { name: 'REST APIs', icon: <FaServer className="text-green-500" /> },
        { name: 'GraphQL', icon: <SiGraphql className="text-pink-600" /> },
        { name: 'WebSockets', icon: <FaDatabase className="text-blue-500" /> },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
        { name: 'Prisma', icon: <SiPrisma className="text-gray-700" /> },
      ],
    },
    {
      category: 'Authentication & Security',
      skills: [
        { name: 'JWT', icon: <FaShieldAlt className="text-purple-600" /> },
        { name: 'OAuth', icon: <FaShieldAlt className="text-red-500" /> },
      ],
    },
    {
      category: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
        { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-600" /> },
      ],
    },
    {
      category: 'Observability & Monitoring',
      skills: [
        { name: 'CloudWatch', icon: <FaChartLine className="text-orange-500" /> },
        { name: 'Prometheus', icon: <SiPrometheus className="text-orange-600" /> },
        { name: 'Grafana', icon: <SiGrafana className="text-orange-500" /> },
      ],
    },
    {
      category: 'Developer Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
        { name: 'GitHub', icon: <FaGitAlt className="text-gray-800" /> },
        { name: 'Turborepo', icon: <FaNodeJs className="text-red-500" /> },
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-2xl">{skill.icon}</div>
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-3">Additional AWS Services</h3>
            <p className="text-gray-700">
              <span className="font-semibold">AWS:</span> EC2, AWS Lambda, S3, Auto-Scaling Groups, SQS, ECR, ECS, VPC, IAM, CloudFormation, RDS, Secrets Manager
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
