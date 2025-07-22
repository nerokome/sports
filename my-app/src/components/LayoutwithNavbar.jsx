// src/components/Layout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  const { pathname } = useLocation();

  // Optional: Hide Navbar on certain routes (redundant here since we excluded /login & /signup)
  const hideNavbar = pathname === '/login' || pathname === '/signup';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Outlet />
    </>
  );
};

export default Layout;
