"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const destinations = {
  africa: [
    { name: 'Egypt', image: '/images/egypt.jpg' },
    { name: 'Morocco', image: '/images/morocco.jpg' },
  ],
  america: [
    { name: 'USA', image: '/images/usa.jpg' },
    { name: 'Canada', image: '/images/canada.jpg' },
    { name: 'Brazil', image: '/images/brazil.jpg' },
    { name: 'Mexico', image: '/images/mexico.jpg' },
    { name: 'Argentina', image: '/images/argentina.jpg' },
    { name: 'Colombia', image: '/images/colombia.jpg' },
    { name: 'Chile', image: '/images/chile.jpg' },
    { name: 'Peru', image: '/images/peru.jpg' },
    { name: 'Venezuela', image: '/images/venezuela.jpg' },
  ],
  asia: [
    { name: 'China', image: '/images/china.jpg' },
    { name: 'Japan', image: '/images/japan.jpg' },
    { name: 'India', image: '/images/india.jpg' },
    { name: 'Thailand', image: '/images/thailand.jpg' },
    { name: 'Indonesia', image: '/images/indonesia.jpg' },
    { name: 'South Korea', image: '/images/south_korea.jpg' },
    { name: 'Vietnam', image: '/images/vietnam.jpg' },
    { name: 'Malaysia', image: '/images/malaysia.jpg' },
    { name: 'Singapore', image: '/images/singapore.jpg' },
    { name: 'Pakistan', image: '/images/pakistan.jpg' },
    { name: 'Bangladesh', image: '/images/bangladesh.jpg' },
    { name: 'Sri Lanka', image: '/images/srilanka.jpg' },
    { name: 'Nepal', image: '/images/nepal.jpg' },
    { name: 'Philippines', image: '/images/philippines.jpeg' },
    { name: 'Myanmar', image: '/images/myanmar.jpg' },
  ],
  europe: [
    { name: 'France', image: '/images/france.jpg' },
    { name: 'Germany', image: '/images/germany.jpg' },
    { name: 'Italy', image: '/images/italy.jpg' },
  ],
};

const DestinationPage = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      {/* Top Image and "Direct Jump to" Section */}
      <div className="relative mb-12">
        <motion.img
          src='/wallpaper/w5.jpg'
          alt="Destination"
          className="w-full h-[50vh] object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <h2 className="text-4xl font-bold">Destinations</h2>
          
        </div>
      </div>

      <div className="mt-24 mb-24 md:w-[900px] md:h-[80px] border border-gray-400 mx-auto text-center flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Jump to Sections</h3>
        <ul className="flex md:flex-row flex-col md:gap-10 gap-5 justify-center text-2xl text-gray-800">
            <li>
            <Link 
                href="#africa" 
                className="relative text-orange-500 hover:text-orange-700 hover:scale-110 transition-all duration-300"
            >
                Africa
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            </li>
            <li>
            <Link 
                href="#america" 
                className="relative text-orange-500 hover:text-orange-700 hover:scale-110 transition-all duration-300"
            >
                America
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            </li>
            <li>
            <Link 
                href="#asia" 
                className="relative text-orange-500 hover:text-orange-700 hover:scale-110 transition-all duration-300"
            >
                Asia
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            </li>
            <li>
            <Link 
                href="#europe" 
                className="relative text-orange-500 hover:text-orange-700 hover:scale-110 transition-all duration-300"
            >
                Europe
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            </li>
        </ul>
        </div>


      {/* Africa Section */}
      <motion.div
        id="africa"
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 className="text-3xl font-bold mb-4">Africa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {destinations.africa.map((destination) => (
            <motion.div
              key={destination.name}
              className="relative overflow-hidden group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={destination.image}
                alt={destination.name}
                width={400}
                height={100}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-2xl font-semibold">
                {destination.name}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* America Section */}
      <motion.div
        id="america"
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 className="text-3xl font-bold mb-4">America</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.america.map((destination) => (
            <motion.div
              key={destination.name}
              className="relative overflow-hidden group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={destination.image}
                alt={destination.name}
                width={400}
                height={100}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-2xl font-semibold">
                {destination.name}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Asia Section */}
      <motion.div
        id="asia"
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 className="text-3xl font-bold mb-4">Asia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {destinations.asia.map((destination) => (
            <motion.div
              key={destination.name}
              className="relative overflow-hidden group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={destination.image}
                alt={destination.name}
                width={400}
                height={100}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-2xl font-semibold">
                {destination.name}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Europe Section */}
      <motion.div
        id="europe"
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 className="text-3xl font-bold mb-4">Europe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.europe.map((destination) => (
            <motion.div
              key={destination.name}
              className="relative overflow-hidden group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={destination.image}
                alt={destination.name}
                width={400}
                height={100}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-2xl font-semibold">
                {destination.name}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DestinationPage;
