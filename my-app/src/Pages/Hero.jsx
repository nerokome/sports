import React, { useEffect, useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load heavy components
const Body = lazy(() => import('../components/Body'));
const Start = lazy(() => import('../components/Start'));
const NewsletterForm = lazy(() => import('../components/Newsletterform'));
const Endcontact = lazy(() => import('../components/Endcontact'));

const images = ['/coa.webp', '/roa.webp', '/toa.webp'];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative h-[900px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Slide ${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />

        {/* Hero Content */}
        <motion.div
          className="relative z-20 flex flex-col justify-center items-start h-full px-10 sm:px-20 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.p
            className="text-3xl sm:text-4xl mb-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            THE SPOTLIGHT FOR TOMORROW'S
          </motion.p>

          <motion.p
            className="text-3xl sm:text-4xl mb-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            SPORTS TALENT
          </motion.p>

          <motion.p
            className="text-base sm:text-lg mb-10 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Bridging the gap between grassroots talents and the professional game.
          </motion.p>

          <a href="/mission">
            <motion.div
              className="bg-teal-800 px-6 py-3 sm:px-8 sm:py-4 rounded-3xl text-sm sm:text-lg text-white font-semibold cursor-pointer transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Discover more
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* FOLLOW-UP CONTENT */}
      <Suspense fallback={<div className="text-white p-6 text-center">Loading content...</div>}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Body />
          <Start />
          <NewsletterForm />
          <Endcontact />
        </motion.div>
      </Suspense>
    </div>
  );
};

export default Hero;
