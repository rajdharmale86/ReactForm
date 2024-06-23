import React from 'react';

const Validation = ({ formData }) => {
  const validateForm = () => {
    const errors = [];

    // Validation rules
    if (!formData.name.trim()) {
      errors.push('Name is required.');
    }

    if (!formData.email.trim()) {
      errors.push('Email is required.');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.push('Email must be a valid email address.');
    }

    if (!formData.age.trim()) {
      errors.push('Age is required.');
    } else if (isNaN(formData.age) || Number(formData.age) <= 0) {
      errors.push('Age must be a valid number greater than 0.');
    }

    if (formData.attendingWithGuest && !formData.guestName.trim()) {
      errors.push('Guest Name is required if attending with a guest.');
    }

    return errors;
  };

  const errors = validateForm();

  if (errors.length === 0) {
    return null;
  }

  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
      <h3 className="text-lg font-semibold mb-2">Validation Errors:</h3>
      <ul>
        {errors.map((error, index) => (
          <li key={index} className="ml-4 list-disc">
            {error}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Validation;
