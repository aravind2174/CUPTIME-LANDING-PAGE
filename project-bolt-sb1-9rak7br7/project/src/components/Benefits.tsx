import React from 'react';
import { CheckCircle } from 'lucide-react';
import { BenefitItem } from '../types';

const benefitsList: BenefitItem[] = [
  {
    title: "Franchise Business Models",
    description: "Learn about different franchise business models and which one is right for your industry and goals.",
    icon: "model"
  },
  {
    title: "Legal Framework & Documentation",
    description: "Understand the legal requirements, documentation, and compliance needed to set up a franchise business.",
    icon: "legal"
  },
  {
    title: "Franchisee Selection Process",
    description: "Discover how to identify, evaluate, and select the right franchisees who will represent your brand.",
    icon: "selection"
  },
  {
    title: "Technology Integration",
    description: "Learn how to leverage technology to streamline operations, enhance customer experience, and scale your franchise.",
    icon: "tech"
  },
  {
    title: "Marketing & Brand Consistency",
    description: "Implement strategies to maintain brand consistency across all franchise locations while allowing for local marketing.",
    icon: "marketing"
  },
  {
    title: "Scaling & Growth Strategies",
    description: "Master the art of expanding your franchise business while maintaining quality and profitability.",
    icon: "growth"
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What You'll Learn</h2>
          <div className="w-20 h-1 bg-[#FF0200] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This exclusive webinar covers everything you need to know to successfully launch and scale your franchise business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-[#FF0200]"
            >
              <div className="text-[#FF0200] mb-4">
                <CheckCircle size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-black rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-white mb-4">Bonus Materials Included</h3>
              <p className="text-gray-300 mb-6">
                Register now and receive these exclusive resources to help you implement what you learn right away:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-[#FF0200] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white">Franchise Business Plan Template</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-[#FF0200] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white">Franchisee Evaluation Checklist</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-[#FF0200] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white">Legal Documentation Guide</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-[#FF0200] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white">1-Hour Follow-up Q&A Session</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <a 
                  href="#register" 
                  className="bg-[#FF0200] hover:bg-red-700 text-white py-3 px-8 rounded-md font-medium transition-colors inline-block"
                >
                  Secure Your Spot
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#FF0200]/90 to-[#FF0200]/70 p-8 lg:p-12 flex items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Early Bird Offer</h3>
                <p className="text-white mb-6">
                  Register before the timer runs out to get 60% off the regular price and exclusive access to a private networking group with other entrepreneurs.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-medium">Regular Price:</span>
                    <span className="text-white line-through">₹4,999</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-medium">Early Bird Price:</span>
                    <span className="text-white font-bold text-xl">₹100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">You Save:</span>
                    <span className="text-white font-medium">₹4,899 (60%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;