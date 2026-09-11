import { randomInt } from 'node:crypto'

const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBERS = '0123456789'
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?'

/**
 * Generates a random password of the specified length.
 *
 * @param {number} length - The length of the password to generate.
 * @returns {string} The generated password.
 */
function generatePassword(length) {
  let password = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = randomInt(0, LETTERS.length)
    password += LETTERS.charAt(randomIndex)
  }
  return password
}

export { generatePassword }

/**
 * Generates a random password of the specified length.
 * @param {number} length - The length of the password to generate.
 * @returns {string} The generated password.
 */
function generatePassword(length) {
  let password = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = randomInt(0, LETTERS.length)
    password += LETTERS.charAt(randomIndex)
}
  return password
}

export { generatePassword }