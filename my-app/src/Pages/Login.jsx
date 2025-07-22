import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return setError('Please fill in all fields.');
    }

    // Proceed with login logic (e.g. API call)
    console.log('Form submitted', formData);
  };

return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8"
    >
        <motion.div
            className="w-full max-w-md mx-auto mt-10 bg-white p-4 sm:p-8 rounded-lg shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <motion.h2
                className="text-xl sm:text-2xl font-bold mb-6 text-center text-green-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                Login 
            </motion.h2>

            {error && (
                <motion.p
                    className="text-red-500 text-xs sm:text-sm mb-4 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {error}
                </motion.p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <label htmlFor="email" className="block mb-1 text-xs sm:text-sm font-medium">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-xs sm:text-sm"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <label htmlFor="password" className="block mb-1 text-xs sm:text-sm font-medium">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-xs sm:text-sm"
                    />
                </motion.div>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 mt-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base"
                >
                    Login
                </motion.button>
            </form>
        </motion.div>
    </motion.div>
);
};

export default Login;
