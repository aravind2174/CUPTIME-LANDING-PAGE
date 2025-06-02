import React, { useState, useEffect } from 'react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    expectations: '',
    agreeToTerms: false,
    showQR: false, // NEW
    paymentScreenshot: null as File | null // NEW
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
    const { name, type } = e.target;
    const value = type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      paymentScreenshot: file
    }));
  };

  const toggleQR = () => {
    setFormData(prev => ({
      ...prev,
      showQR: !prev.showQR
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      // Placeholder for Apps Script form submission
      const response = await fetch("https://script.google.com/macros/s/YOUR-URL/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          experience: formData.experience,
          expectations: formData.expectations
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      // Reset form after submission
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        expectations: '',
        agreeToTerms: false,
        showQR: false,
        paymentScreenshot: null
      });
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setIsSubmitting(false);
    }
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
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8 border border-gray-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">Personal Information</h3>
                <p className="text-gray-600">Fill in your details below</p>
              </div>

              {/* Standard Fields */}
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

              {/* NEW: QR Dropdown */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">How would you like to make the payment?</label>
                <button
                  type="button"
                  onClick={toggleQR}
                  className="text-blue-600 underline text-sm"
                >
                  {formData.showQR ? 'Hide QR Code' : 'Click here to show QR Code'}
                </button>
                {formData.showQR && (
                  <div className="mt-4 p-4 border rounded bg-gray-100 text-center">
                    <img
                      src="https://drive.google.com/uc?export=view&id=1RF4rk-uIXN15uDmCxu11gswNBpQKuPVz"
                      alt="Payment QR Code"
                      className="w-48 h-48 mx-auto"
                    />
                    <p className="text-gray-600 mt-2">Scan to pay via UPI</p>
                  </div>
                )}
              </div>

              {/* NEW: Screenshot Upload */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Upload your payment screenshot</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full"
                />
                {formData.paymentScreenshot && (
                  <p className="text-sm text-green-600 mt-2">File selected: {formData.paymentScreenshot.name}</p>
                )}
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
