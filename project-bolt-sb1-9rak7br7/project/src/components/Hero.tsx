import React, { useState, useEffect } from 'react';
import { Coffee } from 'lucide-react';

const Hero: React.FC = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  const [earlyBirdHours, setEarlyBirdHours] = useState(0);
  const [earlyBirdMinutes, setEarlyBirdMinutes] = useState(0);
  const [earlyBirdSeconds, setEarlyBirdSeconds] = useState(0);

  useEffect(() => {
    const webinarDate = new Date('2025-06-22T11:00:00+05:30');

    const interval = setInterval(() => {
      const now = new Date();

      // === Webinar Countdown ===
      const webinarDifference = webinarDate.getTime() - now.getTime();
      const d = Math.floor(webinarDifference / (1000 * 60 * 60 * 24));
      const h = Math.floor((webinarDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((webinarDifference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((webinarDifference % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);

      // === 30-Minute Recurring Early Bird Timer ===
      const millisSinceEpoch = now.getTime();
      const millisInCycle = 30 * 60 * 1000;
      const millisElapsedInCycle = millisSinceEpoch % millisInCycle;
      const millisRemaining = millisInCycle - millisElapsedInCycle;

      const ebh = Math.floor(millisRemaining / (1000 * 60 * 60));
      const ebm = Math.floor((millisRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const ebs = Math.floor((millisRemaining % (1000 * 60)) / 1000);

      setEarlyBirdHours(ebh);
      setEarlyBirdMinutes(ebm);
      setEarlyBirdSeconds(ebs);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#250000]"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#FF0200] opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#FF0200] opacity-20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-24 pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-block mb-6">
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">Live Webinar</span>
              <span className="bg-[#FF0200] text-white px-3 py-1 rounded-full text-sm ml-2">Limited Seats</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              The Ultimate <span className="text-[#FF0200]">Franchise Masterclass</span> by Cup Time
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              100+ Students Mentored | Expert Mentorship | B2B Tech Innovation
            </p>
            
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <Coffee className="text-[#FF0200] w-4 h-4 mr-3" />
                <p className="text-white"><span className="font-medium">Date:</span> June 22nd, 2025 (Sunday)</p>
              </div>
              <div className="flex items-center mb-2">
                <Coffee className="text-[#FF0200] w-4 h-4 mr-3" />
                <p className="text-white"><span className="font-medium">Time:</span> 11:00 AM IST</p>
              </div>
              <div className="flex items-center mb-2">
                <Coffee className="text-[#FF0200] w-4 h-4 mr-3" />
                <p className="text-white"><span className="font-medium">Location:</span> Zoom Meeting</p>
              </div>
              <div className="flex items-center">
                <Coffee className="text-[#FF0200] w-4 h-4 mr-3" />
                <p className="text-white"><span className="font-medium">Contact:</span> +91 916 916 1110</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#register" 
                className="bg-[#FF0200] hover:bg-red-700 text-white py-3 px-8 rounded-md font-medium transition-colors inline-block text-center"
              >
                Reserve My Seat Now for ₹100
              </a>
              <a 
                href="#expert" 
                className="bg-transparent border border-white hover:border-[#FF0200] text-white hover:text-[#FF0200] py-3 px-8 rounded-md font-medium transition-colors inline-block text-center"
              >
                Meet the Expert
              </a>
            </div>
            
            <div className="text-gray-300 text-sm">
              <span className="font-bold text-white">100+ STUDENTS MENTORED</span> and counting. Limited seats available.
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-black to-[#250000] border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-white text-xl font-semibold mb-6">Webinar Starts In:</h3>
              
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-black/50 rounded-lg p-4 text-center border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{days}</div>
                  <div className="text-gray-400 text-sm">Days</div>
                </div>
                <div className="bg-black/50 rounded-lg p-4 text-center border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{hours}</div>
                  <div className="text-gray-400 text-sm">Hours</div>
                </div>
                <div className="bg-black/50 rounded-lg p-4 text-center border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{minutes}</div>
                  <div className="text-gray-400 text-sm">Minutes</div>
                </div>
                <div className="bg-black/50 rounded-lg p-4 text-center border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{seconds}</div>
                  <div className="text-gray-400 text-sm">Seconds</div>
                </div>
              </div>
              
              <div className="bg-[#FF0200]/10 border border-[#FF0200]/20 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <div className="min-w-8 h-8 bg-[#FF0200] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">!</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Early Bird Offer Ends In:</h4>
                    <div className="flex gap-2 text-white mb-2">
                      <span>{earlyBirdHours}h</span>
                      <span>{earlyBirdMinutes}m</span>
                      <span>{earlyBirdSeconds}s</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Regular Price: <span className="line-through">₹7,999</span><br />
                      Early Bird Price: <span className="font-bold text-white">₹99</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <a 
                href="#register" 
                className="bg-[#FF0200] hover:bg-red-700 text-white py-3 px-6 rounded-md font-medium transition-colors block text-center w-full"
              >
                Secure Your Spot for Just ₹99
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
