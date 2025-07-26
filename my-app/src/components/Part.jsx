import React from 'react';
import { motion } from 'framer-motion';

const resources = [
  {
    title: "A Global Stage for Youth Sports",
    description:
      "Sports unite the world — yet countless young athletes with immense potential go unnoticed. At Scah, we harness emerging technologies to spotlight untapped talent and fuel the growth of youth sports across the globe.",
    link: "#",
    image: "/america.webp",
  },
  {
    title: "Empowering Discovery & Development",
    description:
      "We believe innovation can transform how youth talent is identified and developed. Our mission is to give visibility to underrepresented athletes, teams, and regions, while equipping young players with the tools to improve and be discovered.",
    link: "#",
    image: "/hudson.webp",
  },
  {
    title: "Smart Technology, Real Insights",
    description:
      "Our platform is built on a powerful database of youth athletes and match footage. With AI-driven analytics and expert insight, we deliver performance data that powers meaningful evaluation and development — all grounded in video evidence.",
    link: "#",
    image: "/nemesia.webp",
  },
  {
    title: "Built with the Community",
    description:
      "Youth sports thrive on collaboration — from players and coaches to clubs, scouts, agents, and brands. We work alongside every corner of the ecosystem to co-create tools and insights that benefit everyone, elevating the game at every level.",
    link: "#",
    image: "/chang.webp",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.5,
      type: 'spring',
      stiffness: 80,
    },
  }),
};

const Part = () => {
  return (
    <section className="min-h-screen bg-[#F4F2EE] px-4 py-12 flex items-center justify-center">
      <div className="container mx-auto relative z-10">
        <h1 className="text-xl sm:text-4xl font-bold mb-4 text-center leading-tight">
          Get to know <span className="text-teal-700">SCAH</span>
        </h1>

        <p className="text-sm sm:text-lg text-center leading-relaxed max-w-2xl mx-auto px-2 mb-16">
          Driven by a passion for unlocking youth football’s hidden potential,
          our solutions are crafted to uplift and empower the community at every level.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-xl shadow-lg p-4 bg-opacity-90 cursor-pointer hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "#115E59" }}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-48 sm:h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-200">{item.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Part;
