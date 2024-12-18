"use client"
// components/AboutSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";

const  AboutSection=() => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center md:mb-0 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image with Animation */}
          <motion.div
            className="relative w-[200px] h-[250px] md:w-[900px] md:h-[530px] rounded-full overflow-hidden shadow-xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src="/profile/pic.jpg"
              alt="Your Name"
              layout="fill"
              objectFit="cover"
              quality={90}
              priority
              className=" rounded-full"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-left md:w-[2500px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hi, I am <span className="font-semibold">Rukhsar Malik</span>, a travel
              enthusiast with an insatiable passion for discovering the world&#39;s
              hidden gems. From quiet mountain retreats to vibrant cityscapes,
              I believe every destination has a unique story waiting to be told.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
             Through this blog, I aim to share the beauty and diversity of the world by exploring different places,
             cultures, and experiences. From the majestic landscapes of Africa to the vibrant cities of Asia, 
             I will take you on a journey across continents, providing insights, 
             travel tips, and hidden gems that you won&#39;t find in typical guidebooks.
              Whether you&#39;re an avid traveler or someone who loves learning about new destinations, 
              my goal is to inspire your next adventure and offer a closer look at the fascinating corners of our planet.


.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Let&#39;s embark on this journey together! Connect with me
            
              or share your travel stories. Adventure awaits!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
