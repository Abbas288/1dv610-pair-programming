/**
 * Generates a random password of the specified length.
 *
 * @param {number} length - The length of the password to generate.
 * @returns {string} The generated password.
 */
function generatePassword(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'
  let password = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    password += characters.charAt(randomIndex)
  }
  return password
}

export { generatePassword }