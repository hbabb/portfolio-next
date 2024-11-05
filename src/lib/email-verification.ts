interface ValidationResult {
  isValid: boolean;
  reason?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const disposableEmailDomains = ['tempmail.com', 'throwawaymail.com'];

export const validateEmail = (email: string): ValidationResult => {
  if (!emailRegex.test(email)) {
    return { isValid: false, reason: 'Invalid email format' };
  }

  const domain = email.split('@')[1];
  if (disposableEmailDomains.includes(domain)) {
    return { isValid: false, reason: 'Disposable email addresses are not allowed' };
  }

  return { isValid: true };
};