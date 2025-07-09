import React from 'react';
import { motion } from 'framer-motion';

const Part = () => {
  const resources = [
    {
      title: "🌍 A Global Stage for Youth Sports",
      description: "Sports unite the world — yet countless young athletes with immense potential go unnoticed. At Scah, we harness emerging technologies to spotlight untapped talent and fuel the growth of youth sports across the globe.",
      link: "#",
      image: "/america.webp",
    },
    {
      title: "🚀 Empowering Discovery & Development",
      description: "We believe innovation can transform how youth talent is identified and developed. Our mission is to give visibility to underrepresented athletes, teams, and regions, while equipping young players with the tools to improve and be discovered.",
      link: "#",
      image: "/hudson.webp",
    },
    {
      title: "💡 Smart Technology, Real Insights",
      description: "Our platform is built on a powerful database of youth athletes and match footage. With AI-driven analytics and expert insight, we deliver performance data that powers meaningful evaluation and development — all grounded in video evidence.",
      link: "#",
      image: "/nemesia.webp",
    },
    {
      title: "🤝 Built with the Community",
      description: "Youth sports thrive on collaboration — from players and coaches to clubs, scouts, agents, and brands. We work alongside every corner of the ecosystem to co-create tools and insights that benefit everyone, elevating the game at every level.",
      link: "#",
      image: "/chang.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-300 px-4 py-8 flex items-center justify-center">
      <div className="container mx-auto relative z-10">
       <h1 className="text-xl sm:text-4xl font-bold mb-4 text-center leading-tight break-words">
  Get to know <span className="italic">SCAH</span>
</h1>

<p className="text-sm sm:text-lg font-serif italic text-center leading-relaxed max-w-xl mx-auto px-2 mb-20">
  Driven by a passion for unlocking youth football’s hidden potential, our solutions are crafted to uplift and empower the community at every level.
</p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {resources.map((item, index) => {
            const bgColor = "#9CA3AF";

            return (
              <motion.div
                key={index}
                className="flex flex-col rounded-xl shadow-lg p-4 bg-opacity-90 cursor-pointer hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: bgColor }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
              >
                <a
                  
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 sm:h-60 md:h-64 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg sm:text-xl font-bold font-mono mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700">{item.description}</p>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Part;
