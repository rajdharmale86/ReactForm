import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { validationRules } from './Validation1';
import logo from "../register.avif";
import lg from "../images.png";

const ApplicationForm = ({ setFormData }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    setFormData(data);
    navigate('/Summary');
  };

  const applyingFor = watch('applyingFor');
  const additionalSkills = [
    'JavaScript', 'CSS', 'Python', 'React', 'Node.js'
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${logo})` }}>
      <div className="absolute top-6 left-6 flex items-center bg-white bg-opacity-70 p-2 rounded-lg shadow-md">
        <img src={lg} alt="Naukri" className="h-10 w-10 rounded-full" />
        <span className="ml-3 text-lg font-bold text-gray-800">Naukri</span>
      </div>
      <div className="w-full max-w-lg p-8 bg-white bg-opacity-90 shadow-lg rounded-lg mt-6 relative max-h-[700px] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Job Application</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              {...register('fullName', validationRules.fullName)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email', validationRules.email)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="number"
              {...register('phoneNumber', validationRules.phoneNumber)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">Phone Number is required.</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Applying for Position</label>
            <select
              {...register('applyingFor', validationRules.applyingFor)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select...</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
            {errors.applyingFor && <p className="text-red-500 text-sm mt-1">{errors.applyingFor.message}</p>}
          </div>

          {(applyingFor === 'Developer' || applyingFor === 'Designer') && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Relevant Experience (years)</label>
              <input
                type="number"
                {...register('relevantExperience', validationRules.relevantExperience)}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.relevantExperience && <p className="text-red-500 text-sm mt-1">{errors.relevantExperience.message}</p>}
            </div>
          )}

          {applyingFor === 'Designer' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Portfolio URL</label>
              <input
                type="text"
                {...register('portfolioURL', validationRules.portfolioURL)}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.portfolioURL && <p className="text-red-500 text-sm mt-1">{errors.portfolioURL.message}</p>}
            </div>
          )}

          {applyingFor === 'Manager' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Management Experience</label>
              <input
                type="text"
                {...register('managementExperience', validationRules.managementExperience)}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.managementExperience && <p className="text-red-500 text-sm mt-1">{errors.managementExperience.message}</p>}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Additional Skills</label>
            <div className="mt-1 grid grid-cols-2 gap-2">
              {additionalSkills.map(skill => (
                <div key={skill} className="flex items-center">
                  <input
                    type="checkbox"
                    {...register('additionalSkills', validationRules.additionalSkills)}
                    value={skill}
                    className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
            {errors.additionalSkills && <p className="text-red-500 text-sm mt-1">{errors.additionalSkills.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Interview Time</label>
            <input
              type="datetime-local"
              {...register('preferredInterviewTime', validationRules.preferredInterviewTime)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.preferredInterviewTime && <p className="text-red-500 text-sm mt-1">{errors.preferredInterviewTime.message}</p>}
          </div>

          <div className="flex justify-end">
            <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition duration-200">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
