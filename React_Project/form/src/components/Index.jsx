import React, { useState } from 'react';
import RegistrationForm from './RegisterationForm';
import Validation from './Validation';

const Index= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: false,
    guestName: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Age validation
    if (formData.age < 1) {
      setError('Age must be at least 1.');
      return;
    }

    setSubmitting(true);
    setError('');

    
    setTimeout(() => {
      setSubmitting(false);
      console.log('Form submitted with data:', formData);
    
      alert('Form submitted successfully!');
    }, 1000); 
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <RegistrationForm
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
        {submitting && <p className="text-center mt-4">Submitting...</p>}
        {error && <p className="text-center mt-4 text-red-500">{error}</p>}
        <Validation formData={formData} />
      </div>
    </div>
  );
};

export default Index;
