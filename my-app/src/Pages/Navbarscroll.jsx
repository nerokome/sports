// components/NavbarWithScroll.jsx
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

export default function NavbarWithScroll() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: scrolled ? '#F4F2EE' : '#F4F2EE',
        transition: 'background-color 0.3s',
      }}
    >
      <Navbar />
    </div>
  );
}
