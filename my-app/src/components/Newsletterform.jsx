import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-200 text-gray-800 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between rounded-lg w-full mx-auto"
    >
      {/* Left Side: Text and Form */}
      <motion.div
        className="w-full md:w-1/2 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
         Stay ahead with exclusive updates and expert insight into youth sports.
        </h2>
        <p className="text-xl font-bold mt-4 mb-6">Subscribe to our updates</p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-full bg-transparent border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-full bg-transparent border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileFocus={{ scale: 1.02 }}
          />

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-sm leading-tight">
              I consent to receiving newsletters and promotional communications via email.
              I understand that I can unsubscribe at any time.
            </label>
          </div>

          <motion.button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            JOIN
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.div
          className="w-60 h-60 rounded-full overflow-hidden border-4 border-white"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/news.webp" // Replace with actual image path
            alt="Football Player"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NewsletterForm;
