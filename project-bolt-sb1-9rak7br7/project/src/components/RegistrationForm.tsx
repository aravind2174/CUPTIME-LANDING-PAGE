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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value, checked } = e.target;
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

  const handleRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitted(true);

    window.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLSfrREEvw5j8BN0A7h7S3Jwb1pz163QjjgqEzQymUIla9pvboA/viewform?usp=header';
  };

  return (
    <section id="register" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Register for the Webinar</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Secure your spot and take the first step toward building a successful franchise business.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleRedirect} className="bg-white rounded-xl shadow-xl p-8 border border-gray-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">Personal Information</h3>
                <p className="text-gray-600">Fill in your details below</p>
              </div>

              {['name', 'email', 'phone'].map((field) => (
                <div className="mb-4" key={field}>
                  <label className="block text-gray-700 capitalize">{field}</label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={(formData as any)[field]}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded"
                  />
                  {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                </div>
              ))}

              <div className="mb-4">
                <label className="block text-gray-700">Business Experience (optional)</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">What do you expect from the webinar? (optional)</label>
                <textarea
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded"
                />
              </div>

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
                className="w-full py-2 rounded bg-[#FF0200] text-white font-bold"
              >
                Click here to make the payment
              </button>
            </form>
          ) : (
            <div className="bg-white rounded-xl shadow-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-4">You're being redirected!</h3>
              <p className="text-gray-700">Hang tight… you’re headed to the payment form.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
