import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { IoFootballOutline } from 'react-icons/io5';

const Endcontact = () => {
  return (
    <footer className="bg-black text-gray-200 px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">

        {/* Logo and animation */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="font-mono italic text-3xl p-4 mt-2"
            whileHover={{ scale: 1.05 }}
          >
            SCAH
          </motion.p>

          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="mt-6"
          >
            <IoFootballOutline size={40} className="text-gray-300 animate-bounce" />
          </motion.div>
        </motion.div>

        {/* Legal Links */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h4 className="font-semibold text-lg">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">TERMS AND CONDITIONS</a></li>
            <li><a href="#" className="hover:underline">PROTECTION OF PERSONAL DATA</a></li>
            <li><a href="#" className="hover:underline">PROCESSING OF PERSONAL DATA</a></li>
            <li><a href="#" className="hover:underline">COOKIES POLICY</a></li>
          </ul>
        </motion.div>

        {/* Eyeball Links */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h4 className="font-semibold text-lg">SCAH</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/home" className="hover:underline">HOMEPAGE</a></li>
            <li><a href="/mission" className="hover:underline">MISSION</a></li>
            <li><a href="/contact" className="hover:underline">CONTACTS</a></li>
          </ul>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex gap-4 mt-4 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="#" className="text-gray-300 hover:text-gray-600"><FaFacebookF size={20} /></a>
          <a href="#" className="text-gray-300 hover:text-gray-600"><FaInstagram size={20} /></a>
          <a href="#" className="text-gray-300 hover:text-gray-600"><FaLinkedinIn size={20} /></a>
          <a href="#" className="text-gray-300 hover:text-gray-600"><FaYoutube size={20} /></a>
        </motion.div>
      </div>
      <div className='flex items-center justify-center mt-30'>
        <p className='text-xl font-mono '>
          SCAH @2025
        </p>
      </div>
    </footer>
  );
};

export default Endcontact;
