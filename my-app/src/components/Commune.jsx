import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const communityData = [
  {
    role: 'Athletes',
    image: '/ath.webp',
    description:
      'Aspiring players showcasing skills, uploading match videos, and seeking discovery opportunities.',
  },
  {
    role: 'Coaches & Trainers',
    image: '/aoc.webp',
    description:
      'Dedicated mentors focused on developing raw talent and guiding players toward their goals.',
  },
  {
    role: 'Scouts & Agents',
    image: '/scout.webp',
    description:
      'Professional eyes searching for hidden gems and high-potential players across the globe.',
  },
  {
    role: 'Clubs & Academies',
    image: '/club.webp',
    description:
      'Organizations looking to partner, recruit, and nurture future stars through a robust platform.',
  },
  {
    role: 'Fans & Supporters',
    image: '/fan.webp',
    description:
      'Families, followers, and communities cheering on talent and amplifying their journey.',
  },
  {
    role: 'Analysts & Technologists',
    image: '/tech.webp',
    description:
      'Builders of smart tools and data systems driving modern scouting, analysis, and growth.',
  },
];

const Commune = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    club: '',
    position: '',
    message: '',
    subscribe: false,
  });

  const openForm = (role) => {
    setSelectedRole(role);
    setFormData((prev) => ({ ...prev, position: role }));
  };

  const closeForm = () => {
    setSelectedRole(null);
    setFormData({
      name: '',
      email: '',
      club: '',
      position: '',
      message: '',
      subscribe: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    closeForm();
  };

  return (
    <div className="bg-[#F4F2EE] py-16 px-4 sm:px-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
          The SCAH Community
        </motion.h2>
        <motion.p className="text-lg text-gray-700 mb-14">
          A collaborative space of athletes, coaches, scouts, and fans—each playing a vital role in discovering and developing future stars.
        </motion.p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-30">
          {communityData.map((group, index) => (
            <a
              key={index}
              href="/join"
              className="block group transition-transform transform hover:scale-[1.02]"
            >
              <motion.div
                className="cursor-pointer bg-teal-900 rounded-2xl overflow-hidden transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={group.image}
                    alt={group.role}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl flex text-white items-center gap-2 font-semibold">
                      <span>{group.role}</span>
                    </div>
                    <FiExternalLink className="text-[#F4F2EE]" />
                  </div>
                  <p className="text-sm text-gray-300">{group.description}</p>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commune;
