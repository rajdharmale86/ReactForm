import React from 'react';

const Summary = ({ formData, additionalQuestions, onBack }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Survey Summary</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Full Name:</h3>
          <p>{formData.fullName}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Email:</h3>
          <p>{formData.email}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Survey Topic:</h3>
          <p>{formData.surveyTopic}</p>
        </div>
        {formData.surveyTopic === 'Technology' && (
          <div className="mb-4">
            <h3 className="font-semibold">Favorite Programming Language:</h3>
            <p>{formData.favoriteProgrammingLanguage}</p>
          </div>
        )}
        {formData.surveyTopic === 'Health' && (
          <>
            <div className="mb-4">
              <h3 className="font-semibold">Exercise Frequency:</h3>
              <p>{formData.exerciseFrequency}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Diet Preference:</h3>
              <p>{formData.dietPreference}</p>
            </div>
          </>
        )}
        {formData.surveyTopic === 'Education' && (
          <>
            <div className="mb-4">
              <h3 className="font-semibold">Highest Qualification:</h3>
              <p>{formData.highestQualification}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Field of Study:</h3>
              <p>{formData.fieldOfStudy}</p>
            </div>
          </>
        )}
        <div className="mb-4">
          <h3 className="font-semibold">Feedback:</h3>
          <div className="w-full p-3 border rounded-lg bg-gray-50 break-words">
            <p>{formData.feedback}</p>
          </div>
        </div>
        {additionalQuestions.map((question, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">{question.label}:</h3>
            <p>{formData[question.name]}</p>
          </div>
        ))}
        <button
          onClick={onBack}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 mt-6"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Summary;
