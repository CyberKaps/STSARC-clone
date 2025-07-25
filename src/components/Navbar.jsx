import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import logo from "../assets/logo.jpg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['HOME', 'PRODUCT', 'ABOUT', 'CONTACT'];

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px- py-6 flex justify-between items-center ">
        <div className="w-[100px]">
            <img src={logo} alt="" />
        </div>

        <ul className="hidden md:flex gap-8 text-gray-500 font-sm">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-blue-600 transition">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-white px-4 py-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block text-gray-800 font-medium hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
