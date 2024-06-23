import React, { useState, useEffect } from 'react';
import { validateForm } from './Validation';
import logo from "../register.avif";
import lg from "../images.png";
import Summary from './Summary';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteProgrammingLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  useEffect(() => {
    if (formData.surveyTopic) {
      fetch('/db.json') // Adjust path as needed
        .then(response => response.json())
        .then(data => {
          const questions = data.questions[formData.surveyTopic] || [];
          setAdditionalQuestions(questions);
        })
        .catch(error => console.error('Error fetching additional questions:', error));
    }
  }, [formData.surveyTopic]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Update validation errors in real-time
    const validationErrors = validateForm({
      ...formData,
      [name]: value,
    });
    setErrors(validationErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    setSubmitted(false);
  };

  return submitted ? (
    <Summary
      formData={formData}
      additionalQuestions={additionalQuestions}
      onBack={handleBack}
    />
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
         style={{ backgroundImage: `url(${logo})` }}>
      <div className="absolute top-4 left-4 flex items-center bg-white bg-opacity-80 p-2 rounded-lg shadow-md">
        <img src={lg} alt="Naukri" className="h-10 w-10 rounded-full" />
        <span className="ml-3 text-lg font-bold text-gray-800">Naukri</span>
      </div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-7 w-[500px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Survey Form</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email address"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Survey Topic:</label>
          <select
            name="surveyTopic"
            value={formData.surveyTopic}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a topic</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
          {errors.surveyTopic && <p className="text-red-500 text-sm mt-1">{errors.surveyTopic}</p>}
        </div>

        {formData.surveyTopic === 'Technology' && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Favorite Programming Language:</label>
            <select
              name="favoriteProgrammingLanguage"
              value={formData.favoriteProgrammingLanguage}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a language</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
            </select>
            {errors.favoriteProgrammingLanguage && <p className="text-red-500 text-sm mt-1">{errors.favoriteProgrammingLanguage}</p>}
          </div>
        )}

        {formData.surveyTopic === 'Health' && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Exercise Frequency:</label>
            <select
              name="exerciseFrequency"
              value={formData.exerciseFrequency}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select frequency</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Rarely">Rarely</option>
            </select>
            {errors.exerciseFrequency && <p className="text-red-500 text-sm mt-1">{errors.exerciseFrequency}</p>}
          </div>
        )}

        {formData.surveyTopic === 'Health' && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Diet Preference:</label>
            <select
              name="dietPreference"
              value={formData.dietPreference}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select preference</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
            </select>
            {errors.dietPreference && <p className="text-red-500 text-sm mt-1">{errors.dietPreference}</p>}
          </div>
        )}

        {formData.surveyTopic === 'Education' && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Highest Qualification:</label>
            <select
              name="highestQualification"
              value={formData.highestQualification}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select qualification</option>
              <option value="High School">High School</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
            </select>
            {errors.highestQualification && <p className="text-red-500 text-sm mt-1">{errors.highestQualification}</p>}
          </div>
        )}

        {formData.surveyTopic === 'Education' && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Field of Study:</label>
            <input
              type="text"
              name="fieldOfStudy"
              value={formData.fieldOfStudy}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your field of study"
            />
            {errors.fieldOfStudy && <p className="text-red-500 text-sm mt-1">{errors.fieldOfStudy}</p>}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your feedback"
            rows={4}
          ></textarea>
          {errors.feedback && <p className="text-red-500 text-sm mt-1">{errors.feedback}</p>}
        </div>

        {additionalQuestions.map((question, index) => (
          <div key={index} className="mb-4">
            <label className="block text-sm font-medium mb-2">{question.label}</label>
            <input
              type={question.type}
              name={question.name}
              value={formData[question.name] || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={question.placeholder}
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SurveyForm;
