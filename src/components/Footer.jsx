import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-bgColor text-gray-400">
      <footer className="footer p-10 ">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/neelaa.rani" target="_blank">
              <FaFacebook className="text-2xl text-blue-600"></FaFacebook>
            </a>

            <a href="https://www.linkedin.com/in/neela-rani" target="_blank">
              <FaLinkedin className="text-2xl text-blue-500" />
            </a>

            <a href="https://www.youtube.com/@neela-rani" target="_blank">
              <FaYoutube className="text-2xl text-red-500" />
            </a>
          </div>
        </nav>
      </footer>
      <p className="text-center text-base p-5">
        © 2024 Eco Adventure All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
