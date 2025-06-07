export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Search orqali kiritilgan cityni validate qilish uchun fnksiya
 * @param city Search orqali keladigan shaxar
 * @returns boolean
 */
const validateCity = (city: string): ValidationResult => {
  if (!city || city.trim().length === 0) {
    return {
      isValid: false,
      error: 'City name cannot be empty',
    };
  }

  if (city.trim().length < 2) {
    return {
      isValid: false,
      error: 'City name must be at least 2 characters long',
    };
  }

  if (city.trim().length > 50) {
    return {
      isValid: false,
      error: 'City name cannot exceed 50 characters',
    };
  }

  const validCityRegex = /^[a-zA-Z\s\-']+$/;
  if (!validCityRegex.test(city.trim())) {
    return {
      isValid: false,
      error:
        'City name can only contain letters, spaces, hyphens, and apostrophes',
    };
  }

  return { isValid: true };
};

export default validateCity;
