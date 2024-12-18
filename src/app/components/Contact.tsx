"use client"
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section
      id="contact-section"
      className="relative py-16 px-6 bg-cover bg-center"
      style={{ backgroundImage: 'url("/wallpaper/w3.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}
      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          Feel free to contact me if you have travel questions, comments, or suggestions.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          I&#39;ll try to get back to you!
        </motion.p>

        <motion.a
          href="/contact"
          className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          Contact Me
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
