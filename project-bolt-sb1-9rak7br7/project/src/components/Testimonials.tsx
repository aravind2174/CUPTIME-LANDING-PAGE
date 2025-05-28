import React from 'react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    name: "Rajesh Kumar",
    position: "Founder, TechCafe Chain",
    testimonial: "Prabhakaran's insights transformed how I approached franchising my business. His practical strategies helped me avoid costly mistakes and accelerate growth. Highly recommended!",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Anjali Sharma",
    position: "CEO, Wellness Hub",
    testimonial: "This was exactly what I needed to take my wellness centers to the next level. The legal framework guidance alone saved me thousands in consulting fees. Worth every rupee!",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Vikram Singh",
    position: "Director, FoodBox Franchises",
    testimonial: "As someone with experience in franchising, I was skeptical about learning anything new. I was wrong. Prabhakaran's technology integration strategies revolutionized our operations.",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Success Stories</h2>
          <div className="w-20 h-1 bg-[#FF0200] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from entrepreneurs who have transformed their businesses after learning from Prabhakaran Venugopal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm relative border border-gray-100"
            >
              <div className="absolute -top-4 left-6 text-[#FF0200] text-6xl">"</div>
              <div className="pt-4">
                <p className="text-gray-600 mb-6 relative z-10">{testimonial.testimonial}</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg font-medium">
            Join over 100+ entrepreneurs who have already benefited from Prabhakaran's expertise
          </p>
          <a 
            href="#register" 
            className="bg-[#FF0200] hover:bg-red-700 text-white py-3 px-8 rounded-md font-medium transition-colors inline-block"
          >
            Register for the Webinar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;