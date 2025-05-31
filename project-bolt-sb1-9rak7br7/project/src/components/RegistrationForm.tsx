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
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

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

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxyrXjeTRPzvQsdNaa96pnsIHBzLinxxpc6-CBOtFCCvC6JK1GizGK0LDTTOJ-lABjD/exec', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "Full name": formData.name,
            "email address": formData.email,
            "phone number": formData.phone,
            "business experience": formData.experience,
            "What do you hope to learn from this webinar?": formData.expectations
          })
        });

        const result = await response.json();

        if (result.status === 'success') {
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
          console.error("Error from script:", result.message);
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Network or parsing error:", error);
        alert("Submission failed. Please check your internet or try again later.");
      }

      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* The form UI goes here as in your original code */}
    </form>
  );
};

export default RegistrationForm;
