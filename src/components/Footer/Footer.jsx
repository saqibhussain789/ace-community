import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone, FiMapPin } from "react-icons/fi";
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#112534] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={Logo} alt="ACE Community" className="h-16 w-auto" />
            </div>
            <p className="text-sm leading-relaxed">
              Revolutionizing padel management through innovative 
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Navigation</h3>
            <nav className="space-y-3">
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['Features', '/features'],
                ['Contact', '/contact'],
                ['Demo', '/demo']
              ].map(([title, url]) => (
                <Link
                  key={url}
                  to={url}
                  className="block text-sm hover:text-[#2A7D9B] transition-colors"
                >
                  {title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Solutions</h3>
            <nav className="space-y-3">
              {[
                ['Booking System', '#'],
                ['Membership Management', '#'],
                ['Court Management', '#'],
                ['Payment Processing', '#'],
                ['Analytics Dashboard', '#']
              ].map(([title, url]) => (
                <Link
                  key={title}
                  to={url}
                  className="block text-sm hover:text-[#2A7D9B] transition-colors"
                >
                  {title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FiMapPin className="flex-shrink-0 w-5 h-5 mt-1 text-[#2A7D9B]" />
                <span className="ml-3 text-sm">
                  123 Sports Avenue<br />
               
                </span>
              </div>
              <div className="flex items-center">
                <FiPhone className="flex-shrink-0 w-5 h-5 text-[#2A7D9B]" />
                <span className="ml-3 text-sm">+45 31 78 75 28</span>
              </div>
              <div className="flex items-center">
                <MdEmail className="flex-shrink-0 w-5 h-5 text-[#2A7D9B]" />
                <span className="ml-3 text-sm">info@acecommunity.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} ACE Community. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-xs hover:text-[#2A7D9B] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs hover:text-[#2A7D9B] transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-xs hover:text-[#2A7D9B] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;