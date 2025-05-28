import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const faqItems: FAQItem[] = [
  {
    question: "Who is this masterclass for?",
    answer: "This masterclass is designed for aspiring entrepreneurs, students, and professionals interested in owning a franchise business with low investment and high potential."
  },
  {
    question: "Do I need prior experience in food or business?",
    answer: "Not at all! This session is built for beginners as well as those looking to expand into a proven model."
  },
  {
    question: "What will I get after the webinar?",
    answer: "You'll receive a participation certificate, a franchise starter kit, and access to our exclusive follow-up Q&A session."
  },
  {
    question: "Why is it priced at ₹100 only?",
    answer: "As a launch offer, we've slashed the price from ₹7,999 to ₹100 for the first 24 hours. This is our way of giving back and helping more entrepreneurs rise."
  },
  {
    question: "Will this be an online or offline event?",
    answer: "This is a live online webinar. You'll receive the joining link via email and SMS after you register."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-[#FF0200] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't see your question here, feel free to contact us.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-5 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-lg text-black">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-[#FF0200] flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                  )}
                </button>
                
                <div 
                  className={`px-5 pb-5 ${openIndex === index ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-[#FF0200]/5 rounded-lg p-6 border border-[#FF0200]/20">
            <h3 className="text-xl font-semibold text-black mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              If you couldn't find the answer to your question, please feel free to reach out to our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:support@franchisemastery.com" 
                className="bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-md font-medium transition-colors text-center"
              >
                Email Us
              </a>
              <a 
                href="#register" 
                className="bg-[#FF0200] hover:bg-red-700 text-white py-3 px-6 rounded-md font-medium transition-colors text-center"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

export default FAQ