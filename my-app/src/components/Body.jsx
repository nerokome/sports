import React from 'react';
import { motion } from 'framer-motion';

const roadmapItems = [
  {
    title: 'Scouting Hub',
    description:
      'Discover grassroots talents with professional-grade scouting tools. Track and compare performances in real time.',
    image: '/coach.webp',
  },
  {
    title: 'Spotlight',
    description:
      'Showcase your skills. Shape your future. Access every match you’ve played, build personal highlight reels, track your performance, and create a standout profile that gets noticed.',
    image: '/rename.webp',
  },
  {
    title: 'CoachVision Suite',
    description:
      'Smarter analysis. Better results. Get tactical insights and player-specific video clips. Analyze full matches and fine-tune strategies with visual data that supports every coaching decision.',
    image: '/jeff.webp',
  },
  {
    title: 'Match Footage Access',
    description:
      'Watch full matches, highlight reels, and position-specific clips to assess talent better.',
    image: '/agent.webp',
  },
  {
    title: 'Smart Agent Matching',
    description:
      'Connect rising talents with scouts and agents based on region, skillset, and market value.',
    image: '/agan.webp',
  },
];

const Body = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#F4F2EE] py-12 px-4">
      <motion.p
        className="font-semibold text-3xl mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        NextGen Scouting Ecosystem
      </motion.p>

      {roadmapItems.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20 mt-16 mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Card */}
          <div className="w-full sm:w-[400px] bg-gray-300 border border-teal-800 shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <p className="text-2xl mb-4 font-bold text-left">{item.title}</p>
            <p className="text-lg text-left">{item.description}</p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-[250px] bg-teal-800 mx-4"></div>
          <div className="block sm:hidden w-[80%] h-px bg-teal-800 my-6"></div>

          {/* Image */}
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-[250px] h-[250px] object-cover rounded-full shadow-md"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Body;
