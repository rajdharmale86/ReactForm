import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  if (!formData) {
    return <p>No form data available.</p>;
  }

  const { name, email, age, attendingWithGuest, guestName } = formData;

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Registration Summary</h2>
        <div className="mb-4">
          <p className="text-lg"><strong>Name:</strong> {name}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg"><strong>Email:</strong> {email}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg"><strong>Age:</strong> {age}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg"><strong>Attending with Guest:</strong> {attendingWithGuest === 'true' ? 'Yes' : 'No'}</p>
        </div>
        {attendingWithGuest === 'true' && (
          <div className="mb-4">
            <p className="text-lg"><strong>Guest Name:</strong> {guestName}</p>
          </div>
        )}
        <button
          onClick={handleBackClick}
          className="w-full py-2 px-4 mt-6 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Back to Form
        </button>
      </div>
    </div>
  );
};

export default SummaryPage;
