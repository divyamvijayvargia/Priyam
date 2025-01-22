import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="w-8 h-8" />
              <span className="text-xl font-bold">Priyam</span>
            </div>
            <p className="text-gray-400">
              Delivering innovative software solutions for businesses worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/career" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="w-20 h-10 text-blue-400" />
                <span className="text-gray-400">Priyam Infosystems Pvt. Ltd.
                401- 404, Neelkanth, 1, Bhawani Singh Road, C-scheme, Jaipur-302001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">Ph: +91 141 4005009 (8 Lines)</span>
              </li>
              <li className="flex items-center space-x-2">
                {/* <Phone className="w-5 h-5 text-blue-400" /> */}
                <span className="text-gray-400">+91 8504005009</span>
              </li>
              <li className="flex items-center space-x-2">
                {/* <Phone className="w-5 h-5 text-blue-400" /> */}
                <span className="text-gray-400">+91 9928509900</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">support@priyaminfosystems.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/priyaminfosystemspvtltd/" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/priyaminfosystems" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Priyam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;