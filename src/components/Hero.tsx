import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Raj Bharati
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6">
              FullStack Developer
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4 text-gray-600 mb-8">
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                Hyderabad, India
              </span>
              <span className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                +91-6302548725
              </span>
              <span className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                rajbharati2705@gmail.com
              </span>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="https://github.com/rajbharati2705"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-all transform hover:scale-110"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/raj-bharati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-all transform hover:scale-110"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="mailto:rajbharati2705@gmail.com"
              className="text-gray-700 hover:text-primary transition-all transform hover:scale-110"
            >
              <FaEnvelope size={32} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="/portfolio/resume.pdf"
              download="Raj_Bharati_Resume.pdf"
              className="inline-flex items-center gap-2 bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors transform hover:scale-105 shadow-lg"
            >
              <FaDownload />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
