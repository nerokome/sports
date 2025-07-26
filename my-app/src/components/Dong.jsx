import React from 'react';
import { motion } from 'framer-motion';

const Dong = () => {
  return (
    <div className="bg-black   justify-center">
      <motion.div
        className="flex flex-col md:flex-row   text-white gap-6 "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
              <motion.div
                  className="flex items-center gap-2 self-start"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="/kep.png"
                    alt="SCAH Logo"
                    className="w-32 h-auto md:w-40 object-contain"
                  />
                </motion.div>
                <div className='flex items-start md:items-center md:px-170 '>
                   <ul className="space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row p-5  text-start md:pt-3   md:text-lg md:text-center  text-lg ">
          <li>
            <a href="/home" className="hover:underline">
              Home
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
  
        </ul>
                </div>
       
      </motion.div>
    </div>
  );
};

export default Dong;
