import React from 'react';
import { motion } from 'framer-motion';

const roadmapItems = [
  {
    title: '🚀 Scouting Hub',
    description:
      'Discover grassroots talents with professional-grade scouting tools. Track and compare performances in real time.',
    image: '/coach.webp',
  },
  {
    title: '👤 Spotlight',
    description:
      'Showcase your skills. Shape your future. Access every match you’ve played, build personal highlight reels, track your performance, and create a standout profile that gets noticed.',
    image: '/rename.webp',
  },
  {
    title: '🧠 CoachVision Suite',
    description:
      'Smarter analysis. Better results. Get tactical insights and player-specific video clips. Analyze full matches and fine-tune strategies with visual data that supports every coaching decision.',
    image: '/jeff.webp',
  },
  {
    title: '📹 Match Footage Access',
    description:
      'Watch full matches, highlight reels, and position-specific clips to assess talent better.',
    image: '/agent.webp',
  },
  {
    title: '🤖 Smart Agent Matching',
    description:
      'Connect rising talents with scouts and agents based on region, skillset, and market value.',
    image: '/agan.webp',
  },
];

// Animation Variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80 },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'tween', ease: 'easeOut', duration: 0.6 },
  },
};

const Body = () => {
  return (
    <motion.div
      className="flex flex-col items-center min-h-screen bg-gray-200 py-12 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.p
          className="font-semibold text-3xl mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          NextGen Scouting Ecosystem
        </motion.p>

        {roadmapItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20 mt-20 mb-10 sm:mt-20"
            variants={cardVariant}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-full sm:w-[400px] h-auto border border-gray-300 bg-gray-300 shadow-lg rounded-lg p-6"
              variants={cardVariant}
            >
              <motion.p className="text-2xl mb-4 font-bold text-left">
                {item.title}
              </motion.p>
              <motion.p className="font-light text-lg mb-6 text-left">
                {item.description}
              </motion.p>
              <motion.div className="flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-2xl py-2 px-4 font-mono italic text-gray-200 bg-gray-900 w-[100px]"
                >
                  Visit
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-[250px] bg-gray-400 mx-4"></div>
            <div className="block sm:hidden w-[80%] h-px bg-gray-400 my-6"></div>

            {/* Image */}
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-[250px] h-[250px] object-cover rounded-full shadow-md"
              variants={imageVariant}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Body;
