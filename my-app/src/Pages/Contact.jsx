import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Endcontact from '../components/Endcontact';

const Contact = () => {
  const partRef = useRef(null);

  const scrollToPart = () => {
    partRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full bg-gray-300 min-h-screen overflow-hidden">
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[700px]">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

        <div className="relative z-20 flex flex-col items-start justify-center h-full px-4 sm:px-8 md:px-16 lg:px-20 text-left">
          <motion.h1
            className="text-white font-mono italic text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch with SCAH
          </motion.h1>

          <motion.p
            className="text-white text-base sm:text-lg mt-4 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Connect with us for partnerships, sales, support, and safeguarding inquiries.
          </motion.p>

          <motion.button
            onClick={scrollToPart}
            className="mt-6 px-6 py-3 bg-gray-600 border border-gray-600 shadow-lg font-mono italic text-xl text-white rounded-lg font-semibold hover:bg-transparent transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Contact Info
          </motion.button>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-[#010E2A] text-white px-6 py-12 sm:px-16">
        <motion.h2
          className="text-3xl font-bold text-cyan-400 mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Information
        </motion.h2>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2">Address</h3>
          <p className="font-bold">SCAH </p>
          
        </div>

        <div className="space-y-2">
          <p>
            <span className="text-cyan-400 font-semibold">Sales for Pro Clubs: </span>
            pro.sales@scah.club
          </p>
          <p>
            <span className="text-cyan-400 font-semibold">Sales for Grassroots Programs: </span>
            grassroots@scah.club
          </p>
          <p>
            <span className="text-cyan-400 font-semibold">Sales for Agents: </span>
            agents@scah.club
          </p>
          <p>
            <span className="text-cyan-400 font-semibold">Partnership Opportunities: </span>
            collab@scah.club
          </p>
          <p>
            <span className="text-blue-400 font-semibold">Press Enquiries: </span>
            press@scah.club
          </p>
          <p>
            <span className="text-blue-400 font-semibold">General Enquiries: </span>
            support@scah.club
          </p>
          <p>
            <span className="text-blue-400 font-semibold">Data Protection Office: </span>
            dpo@scah.club
          </p>
          <p>
            <span className="text-cyan-300 font-semibold">Youth Protection & Safeguarding: </span>
            care@scah.club
          </p>
        </div>
      </div>

      {/* Footer or next section */}
      <div ref={partRef} className="relative z-30">
        <Endcontact />
      </div>
    </div>
  );
};

export default Contact;
