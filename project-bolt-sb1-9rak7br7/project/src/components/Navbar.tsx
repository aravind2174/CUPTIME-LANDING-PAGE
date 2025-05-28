import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About Expert', href: '#expert' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Register', href: '#register' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">CupTime<span className="text-[#FF0200]"> MasterClass</span></span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="text-white hover:text-[#FF0200] transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#register" 
              className="bg-[#FF0200] hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium transition-colors"
            >
              Register Now
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-black rounded-md">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="text-white hover:text-[#FF0200] transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#register" 
                className="bg-[#FF0200] hover:bg-red-700 text-white py-2 px-4 rounded-md font-medium transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;