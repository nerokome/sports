import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Body from '../components/Body';
import Start from '../components/Start';
import NewsletterForm from '../components/Newsletterform';
import Endcontact from '../components/Endcontact';

const images = [
  '/coa.webp',
  '/roa.webp',
  '/toa.webp',
]; 

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative  overflow-hidden ">
      
      
      <AnimatePresence>
        {images.map((img, index) => (
          index === current && (
            <motion.img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-[800px] object-cover object-center rounded-2xl"
            />
          )
        ))}
      </AnimatePresence>

      {/* 🔳 Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-[-1] h-full " />

      {/* 🧾 Hero Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-center items-start min-h-screen px-10 sm:px-20 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.p
          className="text-4xl font-serif mb-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          THE SPOTLIGHT FOR TOMORROW'S
        </motion.p>

        <motion.p
          className="text-4xl font-serif mb-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          SPORTS TALENT
        </motion.p>

        <motion.p
          className="text-lg mb-10 max-w-xl italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Bridging the gap between grassroots talents and the professional game.
        </motion.p>

        <motion.div
          className="bg-green-300 p-4 rounded-3xl text-lg py-5 font-mono text-gray-700 font-semibold cursor-pointer hover:bg-green-400 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Discover more
        </motion.div>
      </motion.div>

      {/* ⬇️ Animated Body component wrapper (optional fade-in) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Body />
        <Start/>
        <NewsletterForm/>
        <Endcontact/>
      </motion.div>
    </div>
  );
};

export default Hero;
