import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate <span className="font-semibold text-primary">FullStack Developer</span> with expertise in building scalable web applications 
              and modern tech solutions. Currently working at Dsmart on the Oncare360 Healthcare platform, 
              I specialize in creating efficient, user-centric applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My experience spans across the full development lifecycle - from setting up CI/CD pipelines 
              and AWS infrastructure to implementing real-time communication features and optimizing 
              application performance. I'm particularly skilled in React, Node.js, TypeScript, and cloud technologies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I thrive on solving complex problems, optimizing systems for better performance, and 
              continuously learning new technologies. When I'm not coding, I enjoy contributing to 
              open-source projects and exploring innovative solutions in the tech space.
            </p> */}
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    I'm a <span className="font-semibold text-primary">FullStack Developer</span> specializing in building scalable backend systems and cloud-native applications. 
                    Currently working at Dsmart, I contribute to the Oncare360 healthcare platform, developing services that power remote patient monitoring, device integrations, and healthcare workflows.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    I have experience across the full development lifecycle — from designing APIs and database schemas to deploying services on AWS and building CI/CD pipelines. 
                    My primary stack includes Node.js, TypeScript, React, MySQL, and AWS, with a focus on performance optimization, scalability, and clean architecture.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    I enjoy solving complex engineering challenges, optimizing systems for reliability and performance, and continuously exploring modern backend architectures and cloud technologies.
                </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
