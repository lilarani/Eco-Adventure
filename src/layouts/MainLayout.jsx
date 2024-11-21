import { Outlet } from 'react-router-dom';
import Navbar from './../components/Navbar';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';
import Aos from 'aos';
import { useEffect } from 'react';
const MainLayout = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Toaster></Toaster>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
