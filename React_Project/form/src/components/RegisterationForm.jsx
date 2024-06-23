import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../register.avif';
import lg from "../images.png";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: '',
    guestName: '',
    errors: {}
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      errors: { ...formData.errors, [name]: '' } // Clear the error on input change
    });
  };

  const validateForm = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.age) {
      errors.age = 'Age is required';
    } else if (isNaN(formData.age) || formData.age <= 0) {
      errors.age = 'Invalid age';
    }
    if (formData.attendingWithGuest === 'true' && !formData.guestName) {
      errors.guestName = 'Guest name is required';
    }

    return errors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    } else {
      setFormData({ ...formData, errors });
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      navigate('/summary', { state: { formData } });
    }
  }, [isSubmitted, navigate, formData]);

  const { name, email, age, attendingWithGuest, guestName, errors } = formData;

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${logo})` }}>
      <div className="absolute top-6 left-6 flex items-center bg-white bg-opacity-70 p-2 rounded-lg shadow-md">
        <img src={lg} alt="Naukri" className="h-10 w-10 rounded-full" />
        <span className="ml-3 text-lg font-bold text-gray-800">Naukri</span>
      </div>
      <div className="max-w-md mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Event Registration Form</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={age}
              onChange={onInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="attendingWithGuest" className="block text-sm font-medium text-gray-700">
              Are you attending with a guest?
            </label>
            <select
              id="attendingWithGuest"
              name="attendingWithGuest"
              value={attendingWithGuest}
              onChange={onInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          {attendingWithGuest === 'true' && (
            <div className="mb-4">
              <label htmlFor="guestName" className="block text-sm font-medium text-gray-700">
                Guest Name:
              </label>
              <input
                type="text"
                id="guestName"
                name="guestName"
                value={guestName}
                onChange={onInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.guestName && <p className="text-red-500 text-xs mt-1">{errors.guestName}</p>}
            </div>
          )}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
