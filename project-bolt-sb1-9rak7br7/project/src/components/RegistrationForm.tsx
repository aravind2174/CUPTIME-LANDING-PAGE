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
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await fetch('https://script.google.com/macros/s/AKfycbw6A4EQT4tLiPyUPT0H77r65aL1eWYqsxaKcNbjyhrJlgVxwsQkHHF-LZqEIpkZksI6/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          experience: formData.experience,
          expectations: formData.expectations
        })
      });

      setIsSubmitted(true);
      setTimeout(() => {
        window.location.href =
          'https://docs.google.com/forms/d/e/1FAIpQLSfrREEvw5j8BN0A7h7S3Jwb1pz163QjjgqEzQymUIla9pvboA/viewform?usp=header';
      }, 1000);
    } catch (err) {
      console.error('Submission error:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="register" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 shadow-xl rounded-xl p-8">
            <h2 className="text-3xl font-bold text-[#FF0200] mb-6 text-center">Register for the Franchise Webinar</h2>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email', 'phone'].map((field) => (
                  <div key={field}>
                    <label className="block text-gray-700 font-medium capitalize mb-2">
                      {field === 'phone' ? 'Phone Number' : field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={(formData as any)[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md"
                      placeholder={`Enter your ${field}`}
                    />
                    {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                  </div>
                ))}

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Business Experience (Optional)</label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md"
                    placeholder="Briefly describe your business background"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">What do you expect from the webinar?</label>
                  <textarea
                    name="expectations"
                    value={formData.expectations}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md"
                    placeholder="Mention your goals or curiosity"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-1 mr-2"
                  />
                  <label className="text-gray-700 text-sm">
                    I agree to the terms and conditions
                  </label>
                </div>
                {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>}

                <button
                  type="submit"
                  className="w-full bg-[#FF0200] text-white py-3 rounded-md font-semibold hover:bg-red-700 transition"
                >
                  Click here to make the payment
                </button>
              </form>
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-semibold text-green-600 mb-4">You're being redirected!</h3>
                <p className="text-gray-700">Hang tight... You're heading to the payment form.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
