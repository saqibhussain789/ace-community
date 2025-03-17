import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#eeececef] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex">
              <img
                className="w-auto h-8"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/logo.svg"
                alt="Logo"
              />
            </a>
          </div>
          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
          <div className="hidden ml-auto lg:flex lg:items-center lg:space-x-10">
            {['Home', 'USPs', 'Book a demo', 'About'].map((item) => (
              <a key={item} href="#" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
                {item}
              </a>
            ))}
            <a
              href="/Signup"
              className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-orange-500 text-white hover:bg-orange-600"
            >
              Join us !
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
