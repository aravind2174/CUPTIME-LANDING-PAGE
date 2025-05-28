import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    experience: '',
    expectations: '',
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.businessType) {
      newErrors.businessType = 'Please select a business type';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessType: '',
          experience: '',
          expectations: '',
          agreeToTerms: false
        });
      }, 1500);
    }
  };
  
  return (
    <section id="register" className="py-20 bg-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#FF0200] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#FF0200] opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Register for the Webinar</h2>
          <div className="w-20 h-1 bg-[#FF0200] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Secure your spot in this exclusive webinar and take the first step toward building a successful franchise business.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">Personal Information</h3>
                <p className="text-gray-600">Enter your details to register for the webinar</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#FF0200]`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#FF0200]`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#FF0200]`}
                    placeholder="+91 916 916 1110"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label htmlFor="businessType" className="block text-gray-700 font-medium mb-2">Business Type*</label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border ${errors.businessType ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#FF0200] bg-white`}
                  >
                    <option value="">Select business type</option>
                    <option value="retail">Retail</option>
                    <option value="food">Food & Beverage</option>
                    <option value="service">Service-based</option>
                    <option value="education">Education</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">Business Experience</label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF0200] bg-white"
                >
                  <option value="">Select your experience level</option>
                  <option value="novice">Just starting out</option>
                  <option value="some">1-3 years experience</option>
                  <option value="experienced">3-5 years experience</option>
                  <option value="veteran">5+ years experience</option>
                </select>
              </div>
              
              <div className="mb-8">
                <label htmlFor="expectations" className="block text-gray-700 font-medium mb-2">What do you hope to learn from this webinar?</label>
                <textarea
                  id="expectations"
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF0200]"
                  placeholder="Share your expectations..."
                ></textarea>
              </div>
              
              <div className="mb-8">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="agreeToTerms" className={`text-gray-700 ${errors.agreeToTerms ? 'text-red-500' : ''}`}>
                    I agree to the terms and conditions, including the privacy policy and cancellation policy.
                  </label>
                </div>
                {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-700 font-medium">Webinar Fee:</span>
                  <span className="text-gray-700">₹100 <span className="line-through text-gray-400 ml-2">₹7,999</span></span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Secure payment via credit card, debit card, or UPI. Your payment information is securely processed.
                </p>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">Payment Options:</span>
                  <div className="flex space-x-2">
                    <span className="bg-gray-200 px-2 py-1 rounded text-xs">Credit Card</span>
                    <span className="bg-gray-200 px-2 py-1 rounded text-xs">Debit Card</span>
                    <span className="bg-gray-200 px-2 py-1 rounded text-xs">UPI</span>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF0200] hover:bg-red-700 text-white py-4 px-6 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <span>Complete Registration - ₹100</span>
                )}
              </button>
              
              <p className="text-center text-gray-600 text-sm mt-4">
                By registering, you confirm that you have read and agreed to our Terms and Conditions.
              </p>
            </form>
          ) : (
            <div className="bg-white rounded-xl shadow-xl p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Registration Successful!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for registering for the Cup Time Franchise Masterclass. We've sent a confirmation email with all the details to your inbox.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6 max-w-md mx-auto">
                <p className="text-gray-700 font-medium mb-2">What happens next?</p>
                <ol className="text-sm text-gray-600 text-left space-y-2">
                  <li>1. Check your email for webinar details and login information</li>
                  <li>2. Add the webinar to your calendar</li>
                  <li>3. Complete the pre-webinar questionnaire to help customize the content</li>
                  <li>4. Join the webinar 10 minutes before the start time</li>
                </ol>
              </div>
              <p className="text-gray-600">
                If you have any questions, please contact us at <span className="text-[#FF0200]">support@cuptime.in</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;