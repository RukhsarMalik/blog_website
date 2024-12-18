"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FeaturedSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Featured
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Travel Blog Section */}
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Link href="/blog">
              <div className="relative w-full h-64">
                <Image
                  src="/wallpaper/w2.jpg"
                  alt="Travel Blog"
                  layout='fill'
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white">
                <h3 className="text-xl font-semibold">Travel Blog</h3>
              </div>
            </Link>
          </motion.div>

          {/* Destinations Section */}
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Link href="/destination">
              <div className="relative w-full h-64">
                <Image
                  src="/wallpaper/w5.jpg"
                  alt="Destinations"
                  layout='fill'
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white">
                <h3 className="text-xl font-semibold">Destinations</h3>
              </div>
            </Link>
          </motion.div>

          {/* About Section */}
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Link href="/about">
              <div className="relative w-full h-64">
                <Image
                  src="/profile/pic.jpg"
                  alt="About Me"
                  layout='fill'
                  className="object-contain object-top w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white">
                <h3 className="text-xl font-semibold">About Me</h3>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
