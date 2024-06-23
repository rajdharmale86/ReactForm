export const validateForm = (formData) => {
  let errors = {};

  if (!formData.fullName) {
    errors.fullName = 'Full Name is required';
  }

  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!formData.surveyTopic) {
    errors.surveyTopic = 'Survey Topic is required';
  }

  if (formData.surveyTopic === 'Technology' && !formData.favoriteProgrammingLanguage) {
    errors.favoriteProgrammingLanguage = 'Favorite Programming Language is required';
  }

  if (formData.surveyTopic === 'Health') {
    if (!formData.exerciseFrequency) {
      errors.exerciseFrequency = 'Exercise Frequency is required';
    }
    if (!formData.dietPreference) {
      errors.dietPreference = 'Diet Preference is required';
    }
  }

  if (formData.surveyTopic === 'Education') {
    if (!formData.highestQualification) {
      errors.highestQualification = 'Highest Qualification is required';
    }
    if (!formData.fieldOfStudy) {
      errors.fieldOfStudy = 'Field of Study is required';
    }
  }

  if (!formData.feedback) {
    errors.feedback = 'Feedback is required';
  }

  return errors;
};
