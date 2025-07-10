import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const communityData = [
  {
    role: 'Athletes',
    emoji: '🏃‍♂',
    image: '/ath.webp',
    description:
      'Aspiring players showcasing skills, uploading match videos, and seeking discovery opportunities.',
  },
  {
    role: 'Coaches & Trainers',
    emoji: '🏋‍♂',
    image: '/aoc.webp',
    description:
      'Dedicated mentors focused on developing raw talent and guiding players toward their goals.',
  },
  {
    role: 'Scouts & Agents',
    emoji: '🕵',
    image: '/scout.webp',
    description:
      'Professional eyes searching for hidden gems and high-potential players across the globe.',
  },
  {
    role: 'Clubs & Academies',
    emoji: '🏟',
    image: '/club.webp',
    description:
      'Organizations looking to partner, recruit, and nurture future stars through a robust platform.',
  },
  {
    role: 'Fans & Supporters',
    emoji: '📣',
    image: '/fan.webp',
    description:
      'Families, followers, and communities cheering on talent and amplifying their journey.',
  },
  {
    role: 'Analysts & Technologists',
    emoji: '🧠',
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
    <div className="bg-black text-white py-16 px-4 sm:px-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2 className="text-4xl font-extrabold mb-6">The SCAH Community</motion.h2>
        <motion.p className="text-lg text-gray-300 mb-14">
          A collaborative space of athletes, coaches, scouts, and fans—each playing a vital role in discovering and developing future stars.
        </motion.p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-30">
          {communityData.map((group, index) => (
            <motion.div
              key={index}
              onClick={() => openForm(group.role)}
              className="cursor-pointer bg-gray-900 rounded-2xl overflow-hidden hover:scale-[1.02] transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="h-44 overflow-hidden">
                <img src={group.image} alt={group.role} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-6 text-left">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl flex items-center gap-2 font-semibold">
                    <span>{group.emoji}</span>
                    <span>{group.role}</span>
                  </div>
                  <FiExternalLink className="text-green-400" />
                </div>
                <p className="text-sm text-gray-400">{group.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form Modal */}
        <AnimatePresence>
          {selectedRole && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="bg-[#000d2f] max-w-lg w-full p-6 rounded-xl relative text-left">
                <button className="absolute top-3 right-4 text-white text-xl" onClick={closeForm}>✕</button>
                <h3 className="text-2xl font-bold mb-4">{selectedRole} Contact</h3>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    name="name"
                    placeholder="Name *"
                    className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-300"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email *"
                    className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-300"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    name="club"
                    placeholder="Company / Club *"
                    className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-300"
                    value={formData.club}
                    onChange={handleChange}
                    required
                  />
                  <input
                    name="position"
                    placeholder="Position"
                    className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-300"
                    value={formData.position}
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    placeholder="Type your message to us..."
                    className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-300 h-28 resize-none"
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <label className="flex items-center gap-2 text-sm text-gray-300">
                    <input
                      type="checkbox"
                      name="subscribe"
                      checked={formData.subscribe}
                      onChange={handleChange}
                    />
                    Join our exclusive newsletter community and get insider news and tips.
                  </label>

                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 w-full py-3 rounded-lg font-semibold text-white"
                  >
                    SEND
                  </button>
                </form>

                <p className="text-xs text-gray-400 mt-4">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                  By submitting your personal data, you allow us to process it as described in our data policy.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Commune;
