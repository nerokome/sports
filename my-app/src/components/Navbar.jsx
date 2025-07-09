import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoFootballOutline } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation(); // 👈 Get current path
  const handleNav = () => setNav(!nav);

  const navLinks = [
    { name: 'Home', to: '/home' },
    { name: 'Mission', to: '/mission' },
    { name: 'Community', to: '/community' },
    { name: 'Join us', to: '/join' },
    { name: 'Contact', to: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className='flex justify-between h-20 w-full mx-auto px-4 font-semibold text-xl text-gray-300 bg-transparent'>

      {/* Logo and Icon */}
      <motion.div
        className='flex'
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.p className='font-mono italic text-3xl p-4 mt-2' whileHover={{ scale: 1.05 }}>
          SCAH
        </motion.p>
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className='mt-6'
        >
          <IoFootballOutline size={50} className='animate-bounce' />
        </motion.div>
      </motion.div>

      {/* Desktop Navigation */}
      <ul className='hidden lg:flex pt-5'>
        {navLinks.map(({ name, to }, index) => (
          <motion.li key={index} className='p-4' whileHover={{ scale: 1.05 }}>
            <Link
              to={to}
              className={`transition-colors duration-300 ${
                isActive(to) ? 'text-blue-600 ' : 'text-gray-300 hover:text-red-400'
              }`}
            >
              {name}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Desktop Button */}
      <motion.div
        className='hidden lg:flex gap-3 p-3 mt-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a href='/join' >
          <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="bg-blue-400 hover:bg-blue-600 text-white text-sm font-mono py-2 px-3 h-10 sm:px-4 sm:py-2
             rounded-2xl transition duration-300 ease-in-out italic"
        >
          Login
        </motion.button>
        </a>
      </motion.div>

      {/* Toggle Button for Mobile */}
      <div className='block lg:hidden z-20 pt-6'>
        {!nav && (
          <AiOutlineMenu color='white' size={30} onClick={handleNav} />
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 100 }}
            className='fixed left-0 top-0 w-[300px] h-full bg-black md:hidden z-30 p-4'
          >
            {/* Close Icon */}
            <div className='flex justify-between items-center mb-4'>
              <div className='flex gap-3 '>
                <p className='font-mono italic text-gray-300 text-3xl'>SCAH</p>
                <IoFootballOutline size={40} className='animate-bounce' />
              </div>
              <AiOutlineClose color='gray' size={25} className='cursor-pointer' onClick={handleNav} />
            </div>

            <ul className='cursor-pointer'>
              {navLinks.map(({ name, to }, idx) => (
                <motion.li
                  key={idx}
                  className={`p-4 transition-colors duration-300 ${
                    isActive(to) ? 'text-red-800 ' : 'text-gray-200 hover:text-red-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to={to} onClick={handleNav}>
                    {name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
