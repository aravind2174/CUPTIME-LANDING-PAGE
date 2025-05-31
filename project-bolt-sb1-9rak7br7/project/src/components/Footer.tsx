import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">CupTime<span className="text-[#FF0200]"> MasterClass</span></h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Learn how to build and scale a successful franchise business model from industry experts with proven experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#FF0200] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#FF0200] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#FF0200] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#FF0200] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#expert" className="text-gray-400 hover:text-white transition-colors">About Expert</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">What You'll Learn</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#register" className="text-gray-400 hover:text-white transition-colors">Register</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Wesite:</span>
                <a href="mailto:support@franchisemastery.com" className="text-gray-300 hover:text-white transition-colors">www.cuptime.in</a>
              </li>
              <li className="text-gray-400">
                <span className="block">Phone:</span>
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors">+91 916 916 1110</a>
              </li>
              <li className="text-gray-400 mt-4">
                <a href="#" className="text-[#FF0200] hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li className="text-gray-400">
                <a href="#" className="text-[#FF0200] hover:text-white transition-colors">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear}cuptime. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Made with</span>
              <span className="text-[#FF0200]">❤</span>
              <span className="text-gray-400 text-sm">in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
