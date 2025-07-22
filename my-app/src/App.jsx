import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

// Pages
import Hero from './Pages/Hero';
import Mission from './Pages/Mission';
import Join from './Pages/Join';
import Community from './Pages/Community';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';

// Navbar
import NavbarWithScroll from './Pages/Navbarscroll'; // or './components/NavbarWithScroll' if that's the real path

// Scroll-to-top hook
function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
}

function App() {
  const location = useLocation();
  useScrollToTop();

  // ❌ Routes where the navbar should be hidden
  const noNavbarRoutes = ['/login', '/register'];
  const shouldShowNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <div className="relative">
      {shouldShowNavbar && <NavbarWithScroll />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Redirect root to /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Hero Page */}
          <Route
            path="/home"
            element={
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
              </motion.div>
            }
          />

          {/* Mission Page */}
          <Route
            path="/mission"
            element={
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <Mission />
              </motion.div>
            }
          />

          {/* Join Page */}
          <Route
            path="/join"
            element={
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <Join />
              </motion.div>
            }
          />

          {/* Community Page */}
          <Route
            path="/community"
            element={
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <Community />
              </motion.div>
            }
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            }
          />

          {/* Login Page (No Navbar) */}
          <Route
            path="/login"
            element={
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <Login/>
              </motion.div>
            }
          />

          {/* Register Page (No Navbar) */}
          <Route
            path="/register"
            element={
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <Register />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
