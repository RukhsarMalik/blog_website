"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Destination = () => {
  const destinations = [
    { name: 'Egypt', imgSrc: '/images/egypt.jpg', alt: 'Egypt' },
    { name: 'Morocco', imgSrc: '/images/morocco.jpg', alt: 'Morocco' },
    { name: 'Italy', imgSrc: '/images/italy.jpg', alt: 'Italy' },
    { name: 'Japan', imgSrc: '/images/japan.jpg', alt: 'Japan' },
    { name: 'USA', imgSrc: '/images/usa.jpg', alt: 'USA' },
    { name: 'Pakistan', imgSrc: '/images/pakistan.jpg', alt: 'Spain' }
  ];

  return (
    <section id="destinations" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          Explore Destinations
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <Image
                src={destination.imgSrc}
                alt={destination.alt}
                width={500}
                height={300}
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-semibold">{destination.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Destinations Button */}
        <div className="text-center mt-8">
          <Link
            href="/destination"
            className="px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 font-semibold rounded-lg transition duration-300"
          >
            More Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destination;
