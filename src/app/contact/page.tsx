"use client"
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Contact Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side with Information */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-lg text-gray-700 mb-6">
              Have a question or want to collaborate? Feel free to reach out! I’m always open to new travel stories, adventures, and partnerships.
            </p>
            <ul className="text-gray-700">
              <li className="mb-4">
                <strong>Email: </strong>
                <a href="mailto:yourname@example.com" className="text-blue-600 hover:underline">
                  rukhsarmalik2211@gmail.com
                </a>
              </li>
              
              <li className="mb-4">
                <strong>LinkedIn: </strong>
                <a target="_blank" href="https://www.linkedin.com/in/rukhsar-malik-164147225" className="text-blue-600 hover:underline">
                    www.linkedin.com/in/rukhsar-malik-164147225
                </a>
              </li>

              
            </ul>
          </motion.div>

          {/* Right Side with Contact Form */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter the subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows={5}  
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
