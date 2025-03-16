import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone, FiMapPin } from "react-icons/fi";
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#112534] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img className="h-20" src={Logo} alt="" />
              
            </div>
            <p className="text-gray-300">
              The complete tech solution for padel centers. Simplify management and enhance player experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#2A7D9B]">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#2A7D9B]">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#2A7D9B]">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#2A7D9B]">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#2A7D9B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#2A7D9B] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/usps" className="text-gray-300 hover:text-[#2A7D9B] transition-colors">
                  USPs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#2A7D9B] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/book-demo" className="text-gray-300 hover:text-[#2A7D9B] transition-colors">
                  Book a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#2A7D9B] transition-colors">
                  Booking System
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#2A7D9B] transition-colors">
                  Membership Management
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#2A7D9B] transition-colors">
                  Court Administration
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#2A7D9B] transition-colors">
                  Payment Solutions
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#2A7D9B] transition-colors">
                  Player Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin size={20} className="text-[#2A7D9B] mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Padel Street, Copenhagen, Denmark</span>
              </li>
              <li className="flex items-center">
                <FiPhone size={20} className="text-[#2A7D9B] mr-2 flex-shrink-0" />
                <span className="text-gray-300">+45 31 78 75 28</span>
              </li>
              <li className="flex items-center">
                <MdEmail size={20} className="text-[#2A7D9B] mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@example.io</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} ACECOMMUNITY. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 text-sm hover:text-[#2A7D9B]">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 text-sm hover:text-[#2A7D9B]">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-400 text-sm hover:text-[#2A7D9B]">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;