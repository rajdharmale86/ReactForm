// src/validation.js

export const validationRules = {
    fullName: {
      required: 'Full Name is required.',
    },
    email: {
      required: 'Email is required.',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Valid Email is required.',
      },
    },
    phoneNumber: {
        required: 'Phone Number is required',
        pattern: {
          value: /^[0-9]{10}$/,
          message: 'Phone Number must be exactly 10 digits',
        },
    },
    applyingFor: {
      required: 'Position is required.',
    },
    relevantExperience: {
      required: 'Relevant Experience is required.',
      min: {
        value: 1,
        message: 'Experience must be greater than 0.',
      },
    },
    portfolioURL: {
      required: 'Portfolio URL is required.',
      pattern: {
        value: /^(ftp|http|https):\/\/[^ "]+$/,
        message: 'Valid URL is required.',
      },
    },
    managementExperience: {
      required: 'Management Experience is required.',
    },
    additionalSkills: {
      validate: value => value.length > 0 || 'At least one skill must be selected.',
    },
    preferredInterviewTime: {
      required: 'Interview Time is required.',
    },
  };
  