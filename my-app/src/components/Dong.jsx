import React from 'react';
import { motion } from 'framer-motion';

const Dong = () => {
  return (
    <div className="bg-black h-[300px]  justify-center">
      <motion.div
        className="flex flex-col md:flex-row  justify-center text-white gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <ul className="space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row  text-center text-2xl pt-10">
          <li>
            <a href="/home" className="hover:underline">
              Homepage
            </a>
          </li>
          <li>
            <a href="/mission" className="hover:underline">
              Mission
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Help
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contacts
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Dong;
