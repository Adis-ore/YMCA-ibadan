
import React from 'react';
import { assets } from '../assets/assets'; // Assuming you have a YMCA logo here or replace with your logo path
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 px-6 sm:px-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-12">
        {/* Logo & About */}
        <div>
          <img
            src={assets.ymcaLogo || assets.speedtouch} // Replace with actual YMCA logo asset
            alt="YMCA Logo"
            className="w-32 mb-4"
          />
          <p className="text-gray-600 leading-relaxed max-w-md">
            YMCA Ibadan is committed to youth and community development, 
            providing safe spaces, programs, and opportunities for growth 
            and transformation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xl font-semibold mb-4">Quick Links</p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li>
              <Link to="/" className="hover:text-red-600 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-600 transition">About Us</Link>
            </li>
            <li>
              <Link to="/history" className="hover:text-red-600 transition">History</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-red-600 transition">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-semibold mb-4">Get in Touch</p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li>📞 +234 8062181971</li>
            <li>✉️ ymcaibadan@yahoo.com</li>
            <li>
              <a 
                // href="https://www.ymca.int/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-600 transition underline"
              >
                Official YMCA Website
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      <p className="text-center text-sm text-gray-500">
        &copy; 2025 YMCA Ibadan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
