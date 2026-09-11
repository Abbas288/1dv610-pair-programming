import { randomInt } from 'node:crypto'
import {
  LETTERS,
  NUMBERS,
  SPECIAL_CHARACTERS,
} from './constants.js'

/**
 * Generates random passwords.
 */
class PasswordGenerator {
  /**
   * Generates a random password based on the specified criteria.
   *
   * @param {number} length - The length of the password to generate.
   * @param {boolean} useLetters - Whether to include letters.
   * @param {boolean} useNumbers - Whether to include numbers.
   * @param {boolean} useSpecialCharacters - Whether to include special characters.
   * @returns {string} The generated password.
   */
  generate(
    length,
    useLetters = true,
    useNumbers = true,
    useSpecialCharacters = true
  ) {
    let characters = ''

    if (useLetters) {
      characters += LETTERS
    }

    if (useNumbers) {
      characters += NUMBERS
    }

    if (useSpecialCharacters) {
      characters += SPECIAL_CHARACTERS
    }

    if (characters.length === 0) {
      throw new Error('At least one character type must be selected')
    }

    let password = ''

    for (let i = 0; i < length; i++) {
      const randomIndex = randomInt(characters.length)
      password += characters.charAt(randomIndex)
    }

    return password
  }
}

export { PasswordGenerator }