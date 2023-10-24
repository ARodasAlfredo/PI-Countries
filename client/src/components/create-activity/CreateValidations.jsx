export const CreateValidations = (activity) => {
    let errors = {};
  
    if (!activity.name) {
      errors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(activity.name)) {
      errors.name = "Name can only contain letters and spaces";
    }
  
    if (!activity.difficulty) {
      errors.difficulty = "Difficulty is required";
    } else if (activity.difficulty < 1 || activity.difficulty > 5) {
      errors.difficulty = "Difficulty must be between 1 and 5";
    }
  
    if (!activity.duration) {
      errors.duration = "Duration is required";
    } else if (activity.duration < 1 || activity.duration > 48) {
      errors.duration = "Duration must be between 1 and 48";
    }
  
    if (!activity.season) {
      errors.season = "Season is required";
    }
  
    if (activity.countries.length === 0) {
      errors.countries = "At least one country is required";
    }
  
    return errors;
  };