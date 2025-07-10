import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi'; // install react-icons if you haven't

const communityData = [
  {
    role: 'Athletes',
    emoji: '🧑‍🎓',
    image: '/ath.webp',
    description:
      'Grassroots players and aspiring pros who showcase skills, upload match videos, and get discovered.',
    link: '/community/athletes',
  },
  {
    role: 'Coaches & Trainers',
    emoji: '🧑‍🏫',
    image: '/aoc.webp',
    description:
      'Mentors and academy coaches who develop talent, analyze performance, and guide athletes toward opportunities.',
    link: '/community/coaches',
  },
  {
    role: 'Scouts & Agents',
    emoji: '🕵️‍♂️',
    image: '/scout.webp',
    description:
      'Scouts and club agents searching for promising players using SCAH’s verified data and video tools.',
    link: '/community/scouts',
  },
  {
    role: 'Clubs & Academies',
    emoji: '🧑‍💼',
    image: '/club.webp',
    description:
      'Organizations that recruit, partner, and nurture talent using data-backed scouting tools.',
    link: '/community/clubs',
  },
  {
    role: 'Fans & Supporters',
    emoji: '📣',
    image: '/fan.webp',
    description:
      'Enthusiastic fans and families who follow, support, and amplify the rise of youth talent.',
    link: '/community/fans',
  },
  {
    role: 'Analysts & Technologists',
    emoji: '🧠',
    image: '/tech.webp',
    description:
      'Tech builders and data analysts who power the intelligence behind SCAH’s scouting system.',
    link: '/community/analysts',
  },
];

const Commune = () => {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-10 min-h-screen">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
  <motion.h2
    className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-tight"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    The SCAH Community
  </motion.h2>

  <motion.p
    className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 sm:mb-14 text-gray-300 leading-relaxed"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.6 }}
  >
    A collaborative space of athletes, coaches, scouts, and fans—each playing a vital role in discovering and developing future stars.
  </motion.p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-30">
          {communityData.map((group, index) => (
            <motion.a
              key={index}
              href={group.link}
              className="bg-gray-900 rounded-2xl shadow-3xl overflow-hidden group transform hover:scale-[1.02] transition duration-300 block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={group.image}
                  alt={group.role}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-left">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl flex items-center gap-2 font-semibold">
                    <span>{group.emoji}</span>
                    <span>{group.role}</span>
                  </div>
                  <FiExternalLink className="text-green-400 group-hover:text-green-500 transition" />
                </div>
                <p className="text-sm text-gray-400">{group.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Commune;
