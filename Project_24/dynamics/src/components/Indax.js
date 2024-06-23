import React from 'react';
import { Link } from 'react-router-dom';

const Indax = () => (
  <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h1 className="text-2xl font-bold mb-4">Welcome</h1>
    <Link to="/Application" className="px-4 py-2 bg-blue-600 text-white rounded-md">Go to Application Form</Link>
  </div>
);

export default Indax;
