import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    expectations: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxyrXjeTRPzvQsdNaa96pnsIHBzLinxxpc6-CBOtFCCvC6JK1GizGK0LDTTOJ-lABjD/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            experience: formData.experience,
            expectations: formData.expectations
          }),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          experience: '',
          expectations: '',
          agreeToTerms: false
        });
      } else {
      }
    } catch (error) {
    } finally {
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
                  <span>Complete Registration - ₹99</span>
                )}
              </button>

              <p className="text-center text-gray-600 text-sm mt-4">
                By registering, you confirm that you have read and agreed to our Terms and Conditions.
              </p>
            </form>
          ) : (
            <div className="bg-white rounded-xl shadow-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-4">You're Registered!</h3>
              <p className="text-gray-700">Check your email for confirmation and webinar details.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
