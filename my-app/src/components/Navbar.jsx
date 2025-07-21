import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoFootballOutline } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { CiLogin } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";

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
    <div className='flex justify-between h-20 w-full mx-auto px-4 font-semibold text-xl text-gray-300 bg-transparent border border-b-1 border-gray-300'>

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
                isActive(to) ? 'text-gray-500 ' : 'text-gray-800 hover:text-gray-500'
              }`}
            >
              {name}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Desktop Button */}
      {/* Desktop Button */}
<motion.div
  className="hidden lg:flex gap-3 p-3 mt-4 group"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.01 }}
  transition={{ delay: 0.5, duration: 0.6 }}
>
  <a href="/join">
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{
        scale: 1.08,
        boxShadow: "0px 0px 12px rgba(34,197,94,0.5)",
        backgroundColor: "rgba(255,255,255,0.1)",
      }}
      className="bg-green-400 hover:bg-transparent text-white
       hover:text-green-500 text-sm border border-green-400 shadow-2xl py-2 px-4 h-10 sm:px-4 sm:py-2
        rounded-xl transition-all duration-300 ease-in-out flex items-center gap-2 font-sans italic"
    >
      <motion.span
        whileHover={{ rotate: -5, y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <IoPerson size={20} className="text-white group-hover:text-green-500" />
      </motion.span>
      Sign up
    </motion.button>
  </a>

  <a href="/join">
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{
        scale: 1.08,
        boxShadow: "0px 0px 12px rgba(34,197,94,0.5)",
        backgroundColor: "rgba(255,255,255,0.1)",
      }}
      className="bg-green-400 hover:bg-transparent text-white
       hover:text-green-500 text-sm border border-green-400 shadow-2xl py-2 px-4 h-10 sm:px-4 sm:py-2
        rounded-xl transition-all duration-300 ease-in-out flex items-center gap-2 font-sans italic"
    >
      <motion.span
        whileHover={{ rotate: 5 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        <CiLogin size={20} className="text-white group-hover:text-green-500" />
      </motion.span>
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
          to="/join"
          onClick={handleNav}
          className="block text-center px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
        >
          Sign In
        </Link>
        <Link
          to="/join"
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
