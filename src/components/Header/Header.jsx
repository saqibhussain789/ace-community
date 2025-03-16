import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/ACE-LOGO.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-300 
      ${scrolled ? "backdrop-blur-md bg-[#112534]/70 shadow-lg" : ""} 
      ${isMenuOpen ? "bg-[#112534]" : ""}`} // Solid background when mobile menu is open
    >
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
          <img className="h-12 md:h-14 object-contain" src={logo} alt="ACE COMMUNITY Logo" />

          </Link>

          {/* Desktop Navigation with Vertical Orange Separator */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "USPs", path: "/usps" },
              { name: "Contact Us", path: "/contact" },
              { name: "Book a Demo", path: "/book-demo" },
            ].map((item, index, arr) => (
              <div key={index} className="flex items-center">
                <Link
                  to={item.path}
                  className="text-white hover:text-[#F26524] transition-colors"
                >
                  {item.name}
                </Link>
                {/* Vertical Line except for the last item */}
                {index < arr.length - 1 && (
                  <div className="w-[2px] h-5 bg-[#F26524] mx-4"></div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth buttons with Vertical Separator */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-white hover:text-[#F26524] transition-colors"
            >
              Login
            </Link>
            <div className="w-[2px] h-5 bg-[#F26524]"></div>
            <Link
              to="/signup"
              className="border border-[#F26524] hover:bg-[#F26524]/30 text-white px-4 py-2 rounded flex items-center transition-colors"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#112534] transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button className="text-white" onClick={() => setIsMenuOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>

        <nav className="flex flex-col items-center space-y-6 mt-10">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "USPs", path: "/usps" },
            { name: "Contact Us", path: "/contact" },
            { name: "Book a Demo", path: "/book-demo" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-white text-lg hover:text-[#F26524] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="flex flex-col items-center space-y-4 pt-6">
            <Link
              to="/login"
              className="text-white text-lg hover:text-[#F26524] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="border border-[#F26524] text-white px-6 py-2 rounded-md transition-all hover:bg-[#F26524] hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )};

  export default Header;