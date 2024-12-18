"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image filenames
  const images = [
    '/wallpaper/w1.jpg',
    '/wallpaper/w2.jpg',
    '/wallpaper/w3.jpg',
    '/wallpaper/w4.jpg',
    '/wallpaper/w5.jpg',
  ];

  // Effect to automatically switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen bg-gray-900">
      {/* Background Image with transition effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images[currentIndex]} // Dynamically change image based on currentIndex
          alt={`Wallpaper ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="opacity-80 transition-all duration-1000 ease-in-out"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-6">
        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
          Discover Beautiful Places
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Explore amazing destinations, tips, and guides to fuel your wanderlust.
        </p>
        <button className="mt-6 bg-orange-500 text-gray-900 px-6 py-3 rounded-full text-lg font-medium hover:bg-orange-600">
          <Link href="/blog">
          Start Your Journey</Link>
          
        </button>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900 opacity-80"></div>
    </section>
  );
};

export default Hero;
