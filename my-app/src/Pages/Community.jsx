import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Endcontact from '../components/Endcontact';
import Commune from '../components/Commune';

const Community = () => {
  const partRef = useRef(null);

  const scrollToPart = () => {
    partRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full bg-black min-h-screen overflow-hidden">
      {/* 🎥 Background Video */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[700px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/basket.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🖼️ Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

        {/* 📢 Foreground Text */}
        <div className="relative z-20 flex flex-col items-start justify-center h-full px-4 sm:px-8 md:px-16 lg:px-20 text-left">
          <motion.h1
            className="text-white font-mono italic  text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
           Connect Compete Grow together
          </motion.h1>

          <motion.p
            className="text-white text-base sm:text-lg mt-4 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join a global network of athletes, scouts, and coaches.
             Share your journey, connect with others, and grow through real conversation.
                            <span className='font-semibold'> Your next breakthrough could start here. </span>
          </motion.p>

          <a href="/join">
            <motion.button
              onClick={scrollToPart}
              className="mt-6 px-6 py-3 bg-gray-600 border border-gray-600 shadow-lg font-mono italic text-xl text-white rounded-lg font-semibold hover:bg-transparent   transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get started
            </motion.button>
          </a>
        </div>
      </div>

      {/* ⬇️ Part Section */}
      <div ref={partRef} className="relative z-30">
        <Commune/>
        <Endcontact />
      </div>
    </div>
  );
};

export default Community;
