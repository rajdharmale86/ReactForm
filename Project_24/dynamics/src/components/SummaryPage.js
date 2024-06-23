import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SummaryPage = ({ formData }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!formData) {
      navigate('/');
    }
  }, [formData, navigate]);

  if (!formData) {
    return null;
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Summary of Submitted Data</h1>
      <pre className="bg-gray-100 p-4 rounded-md">
        {JSON.stringify(formData, null, 2)}
      </pre>
      <button
        onClick={() => navigate('/')}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Back to Form
      </button>
    </div>
  );
};

export default SummaryPage;
