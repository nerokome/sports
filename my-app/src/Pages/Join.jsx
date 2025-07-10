import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Endcontact from '../components/Endcontact';

// ✅ List of slideshow images
const images = [
  '/wen.webp', 
  '/amerball.webp',
  '/ken.webp',
];

const Join = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [currentImage, setCurrentImage] = useState(0);

  // ✅ Rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Handle email submission
  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      setMessage('❌ Please enter a valid email.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/v1/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ You’ve been added to the waitlist!');
        setEmail('');
      } else {
        setMessage(data?.error || 'Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-between bg-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
         <div className='bg-gray-800 h-20 w-full'>

        </div>
      <main className="flex-grow flex flex-col  md:flex-row">
       
        {/* 🔹 Form Section - Left */}
        <div className="md:w-1/2 w-full flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-2xl text-center">
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
              <p className="text-3xl sm:text-4xl font-semibold">Scout,</p>
              <p className="text-3xl sm:text-4xl font-semibold">
                <span className="text-blue-500">Spot</span> and Develop Talent
              </p>
            </div>
            <p className="text-3xl sm:text-4xl font-semibold mt-2">— All in one place</p>

            <div className="mt-6 text-base sm:text-lg font-medium text-gray-700">
              <p>
                Welcome to <span className="text-blue-600 font-semibold">SCAH</span>, the all-in-one
                scouting hub unlocking hidden youth talent through data, video, and performance tools.
                Join the next-gen platform built for <span className="text-red-500">scouts</span>,{' '}
                <span className="text-yellow-500">coaches</span>, and{' '}
                <span className="text-green-600">rising athletes</span>.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="flex-1 w-full p-3 rounded-lg shadow-md text-gray-800 placeholder-gray-500 placeholder:italic focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200 w-full sm:w-auto"
                onClick={handleSubscribe}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Join Waitlist'}
              </button>
            </div>

            {message && (
              <p className="mt-4 text-sm font-medium text-green-600">{message}</p>
            )}
          </div>
        </div>

        {/* 🔹 Slideshow Section - Right */}
        <div className="md:w-1/2 w-full flex items-center justify-center p-6 bg-gray-200">
          <div className="relative w-full max-w-md h-[300px] md:h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[currentImage]}
                src={images[currentImage]}
                alt="Scouting Slide"
                className="w-full h-full object-cover rounded-3xl border-4 border-white shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Endcontact />
    </motion.div>
  );
};

export default Join;
