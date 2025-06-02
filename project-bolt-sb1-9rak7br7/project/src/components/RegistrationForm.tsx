import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    console.log("Form component mounted");
  }, []);

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
      await fetch(
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

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        expectations: '',
        agreeToTerms: false
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-20 bg-black relative">
      <div className="absolute inset-0 overflow-hidden z-0">
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
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8 border border-gray-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">Personal Information</h3>
                <p className="text-gray-600">Enter your details to register for the webinar</p>
              </div>

              {/* Name */}
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              {/* Experience */}
              <div className="mb-4">
                <label className="block text-gray-700">Business Experience (optional)</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded"
                />
              </div>

              {/* Expectations */}
              <div className="mb-4">
                <label className="block text-gray-700">What do you expect from the webinar? (optional)</label>
                <textarea
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded"
                />
              </div>

              {/* Terms */}
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-gray-700">I agree to the terms and conditions</span>
                </label>
                {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>}
              </div>

              <button
                type="submit"
                className={`w-full py-2 rounded bg-[#FF0200] text-white font-bold ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Register'}
              </button>
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
