import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';



const Layout: React.FC = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
      <div>
        <div className="relative z-50">
          {!isHomePage && <Navbar type="others" />}
        </div>
        <main>
          <Outlet />
        </main>
        <div className="bg-[#792F9E] text-white py-12 px-6 md:px-16">
          <ContactUs />
          <div className="border-[.5px] border-[#ffffff4d] my-10 w-[90%] m-auto" />

          <Footer />
        </div>
      </div>
    );
};

export default Layout;