/**
 * Evaluates password strength.
 */
class PasswordStrengthEvaluator {
    /**
     * Evaluates the strength of a password.
     *
     * @param {string} password - The password to evaluate.
     * @returns {string} The password strength.
     */
    evaluate(password) {
      if (password.length < 8) {
        return 'Weak'
      }
  
      if (password.length < 12) {
        return 'Medium'
      }
  
      return 'Strong'
    }
  }
  
  export { PasswordStrengthEvaluator }