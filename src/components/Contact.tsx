import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary" />,
      label: 'Email',
      value: 'rajbharati2705@gmail.com',
      href: 'mailto:rajbharati2705@gmail.com',
    },
    {
      icon: <FaPhone className="text-primary" />,
      label: 'Phone',
      value: '+91-6302548725',
      href: 'tel:+916302548725',
    },
    {
      icon: <FaMapMarkerAlt className="text-primary" />,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#',
    },
    {
      icon: <FaLinkedin className="text-primary" />,
      label: 'LinkedIn',
      value: 'Raj Bharati',
      href: 'https://www.linkedin.com/in/raj-bharati',
    },
    {
      icon: <FaGithub className="text-primary" />,
      label: 'GitHub',
      value: 'rajbharati2705',
      href: 'https://github.com/rajbharati2705',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.label}
                    </h3>
                    <p className="text-gray-700">{item.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="text-center mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href="mailto:rajbharati2705@gmail.com"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors transform hover:scale-105 shadow-lg"
            >
              Send Me an Email
            </a>
            <a
              href="/resume.pdf"
              download="Raj_Bharati_Resume.pdf"
              className="inline-flex items-center gap-2 bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors transform hover:scale-105 shadow-lg"
            >
              <FaDownload />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      <footer className="mt-20 text-center text-gray-600 border-t border-gray-300 pt-8">
        <p>&copy; {new Date().getFullYear()} Raj Bharati. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
