import { motion } from 'framer-motion';
import { FaGithub, FaDownload, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const Counter = ({
  end,
  duration = 2,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60 frames per second
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const TypeWriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, 40); // Speed of typing (40ms per character)

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <>
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </>
  );
};

const Hero = () => {
  const stats = [
    { end: 2, suffix: "+", label: "Years Experience" },
    { end: 1000, suffix: "+", label: "Concurrent Connections" },
    { end: 70, suffix: "%", label: "Cost Reduction" },
    { end: 45, suffix: "%", label: "Faster APIs" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-1">
              Raj Bharati
            </h1>
            <p className="text-xs md:text-sm text-primary font-semibold mb-3 tracking-wide">
              Software Engineer @ DSmart Systems (Healthcare SaaS)
            </p>
            <h2 className="text-lg md:text-xl text-gray-900 font-bold mb-5 min-h-[2em]">
              <TypeWriter
                text="Backend Engineer building scalable distributed systems"
                delay={600}
              />
            </h2>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow ${
                  index === 1 || index === 2
                    ? "bg-white border-l-4 border-primary"
                    : "bg-white"
                }`}
              >
                <p
                  className={`font-bold mb-1 ${
                    index === 1 || index === 2
                      ? "text-3xl md:text-4xl text-primary"
                      : "text-2xl md:text-3xl text-gray-700"
                  }`}
                >
                  <Counter end={stat.end} suffix={stat.suffix} duration={2} />
                </p>
                <p className="text-xs md:text-sm text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-4"
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg font-semibold shadow-md"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              View Projects
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.5 }}
              >
                <FaArrowRight size={14} />
              </motion.div>
            </motion.a>
            <motion.a
              href="https://github.com/rajbharati2705"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gray-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 15px 30px rgba(55, 65, 81, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaGithub size={16} />
              </motion.div>
              GitHub
            </motion.a>
            <motion.a
              href="/portfolio/Raj_Bharati_Resume_Enhanced_ATS.pdf"
              download="Raj_Bharati_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary border-2 border-primary px-6 py-2.5 rounded-lg font-semibold"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.5 }}
              >
                <FaDownload size={14} />
              </motion.div>
              Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
