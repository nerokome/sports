import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx';
import React, { useEffect, useState } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavbarWithScroll />
        <App />
    </BrowserRouter>
  </StrictMode>,
)



function NavbarWithScroll() {
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
        backgroundColor: scrolled ? 'black' : 'transparent', // dark gray
        transition: 'background-color 0.3s',
      }}
    >
      <Navbar />
    </div>
  );
}
