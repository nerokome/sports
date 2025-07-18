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
       <img
          src="/sca.png"
         alt="SCAH Logo"
          className="w-32 h-auto md:w-40 object-contain"
/>
       
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
          className="bg-blue-400 hover:bg-blue-600 text-white text-md  py-2 px-3 h-10 sm:px-4 sm:py-2
             rounded-lg transition duration-300 ease-in-out italic "
        >
          sign up
        </motion.button>
        </a>
        <a href='/join' >
          <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="bg-blue-400 hover:bg-blue-600 text-white text-md  py-2 px-3 h-10 sm:px-4 sm:py-2
             rounded-lg transition duration-300 ease-in-out italic "
        >
          sign in
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
      className='fixed left-0 top-0 w-[300px] h-full bg-black md:hidden z-30 p-4 flex flex-col justify-between'
    >
      {/* Top Section: Logo and Links */}
      <div>
        {/* Close Icon and Logo */}
        <div className='flex justify-between items-center mb-4'>
          <div className='flex gap-3'>
            <img
              src="/sca.png"
              alt="SCAH Logo"
              className="w-32 h-auto md:w-40 object-contain"
            />
          </div>
          <AiOutlineClose
            color='gray'
            size={25}
            className='cursor-pointer'
            onClick={handleNav}
          />
        </div>

        {/* Navigation Links */}
        <ul className='cursor-pointer mb-6'>
          {navLinks.map(({ name, to }, idx) => (
            <motion.li
              key={idx}
              className={`p-4 transition-colors duration-300 ${
                isActive(to)
                  ? 'text-red-800'
                  : 'text-gray-200 hover:text-red-400'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Link to={to} onClick={handleNav}>
                {name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Bottom Section: Sign In / Sign Up */}
      <div className="flex flex-col gap-3">
        <Link
          to="/signin"
          onClick={handleNav}
          className="block text-center px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          onClick={handleNav}
          className="block text-center px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
        >
          Sign Up
        </Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default Navbar;
