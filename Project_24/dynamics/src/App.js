import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ApplicationForm from './components/ApplicationForm';
import SummaryPage from './components/SummaryPage';

const App = () => {
  const [formData, setFormData] = useState(null);

  const approuter = createBrowserRouter([
    {
      path: '/',
      element: <ApplicationForm setFormData={setFormData} />,
    },
    {
      path: '/Summary',
      element: <SummaryPage formData={formData} />,
    },
  ]);

  return <RouterProvider router={approuter} />;
};

export default App;
