import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoPerson } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
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
    <div className='flex justify-between h-20 w-full mx-auto px-4 font-semibold text-xl text-gray-800 bg-transparent border-b border-gray-300'>

      {/* Logo */}
      <div className='flex items-center'>
        <img
          src="/kep.png"
          alt="SCAH Logo"
          loading="lazy"
          className="w-35 h-30 md:w-40 object-contain"
        />
      </div>

      {/* Desktop Navigation */}
      <ul className='hidden lg:flex pt-5'>
        {navLinks.map(({ name, to }, index) => (
          <li key={index} className='p-4 hover:scale-105 transition-transform'>
            <Link
              to={to}
              className={`transition-colors duration-300 ${
                isActive(to) ? 'text-gray-500' : 'text-gray-800 hover:text-gray-500'
              }`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex gap-3 p-3 mt-4 group">
        <Link to="/register">
          <button className="bg-teal-800 hover:bg-transparent text-white hover:text-teal-800 text-sm border border-teal-800 shadow-2xl py-2 px-4 h-10 rounded-xl transition-all duration-300 ease-in-out flex items-center gap-2">
            <IoPerson size={20} className="text-white group-hover:text-teal-800" />
            Sign up
          </button>
        </Link>

        <Link to="/login">
          <button className="bg-teal-800 hover:bg-transparent text-white hover:text-teal-800 text-sm border border-teal-800 shadow-2xl py-2 px-4 h-10 rounded-xl transition-all duration-300 ease-in-out flex items-center gap-2">
            <IoPerson size={20} className="text-white group-hover:text-teal-800" />
            Sign in
          </button>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className='block lg:hidden z-20 pt-6'>
        {!nav && (
          <AiOutlineMenu color='black' size={30} onClick={handleNav} />
        )}
      </div>

      {/* Mobile Menu with smooth transition */}
      <div
        className={`fixed right-0 top-0 w-full h-full bg-[#F4F2EE] md:hidden z-30 p-4 flex flex-col justify-between text-black transform transition-transform duration-500 ease-in-out ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Top Section */}
        <div>
          <div className='flex justify-between items-center mb-4'>
            <img
              src="/kep.png"
              alt="SCAH Logo"
              loading="lazy"
              className="w-32 h-30 md:w-40 object-contain"
            />
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
              <li
                key={idx}
                className={`p-4 transition-colors duration-300 ${
                  isActive(to)
                    ? 'text-gray-800'
                    : 'text-gray-800 hover:text-gray-900'
                }`}
              >
                <Link to={to} onClick={handleNav}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-3">
          <Link
            to="/login"
            onClick={handleNav}
            className="block text-center px-4 py-2 border border-gray-900 text-gray-900 rounded hover:bg-white hover:text-black transition"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            onClick={handleNav}
            className="block text-center px-4 py-2 border border-gray-900 text-gray-900 rounded hover:bg-white hover:text-black transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
