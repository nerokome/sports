import { useState } from "react";
import { motion } from "framer-motion";
import Dong from "../components/Dong";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState("");
  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !password2) {
      return setError("Please fill in all fields.");
    }

    if (password !== password2) {
      setError("Passwords do not match.");
    } else {
      const userData = { name, email, password };
      // Submit userData to backend or handle as needed
    }
  };

  return (
    <div className="min-h-screen bg-black">
       <div className="bg-black flex items-center justify-center h-20 w-full" >
               <motion.div
                                 className="flex items-center gap-2 self-start"
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
             </div>
        <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center h-[700px] bg-gray-100 px-4"
    >
      <motion.div
        className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white p-6 sm:p-8 rounded-xl shadow-xl"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-6 text-center font-mono text-green-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Create an Account
        </motion.h2>

        {error && (
          <motion.p
            className="text-red-500 text-sm mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.p>
        )}

        <form onSubmit={handleSubmit} className="grid gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
          >
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </motion.div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
              please specify
            </label>
           <select className="w-full p-2  rounded-lg py-1 px-3 shadow-md border border-gray-300 shadow-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400">
                <option>I am  </option>
               <option>I am an Athlete </option>
               <option>I am a Coach</option>
                <option>I am a Scout</option>
            
          </select>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 }}
          >
            <label htmlFor="password" className="block mb-1 text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label htmlFor="password2" className="block mb-1 text-sm font-medium">
              Confirm Password
            </label>
            <input
              id="password2"
              type="password"
              name="password2"
              placeholder="Confirm your password"
              value={password2}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 mt-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
          >
            Create an account
          </motion.button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 hover:underline">
            Login
          </a>
        </p>
      </motion.div>
      
    </motion.div>
    <Dong/>
    </div>
    
  );
};

export default Register;
