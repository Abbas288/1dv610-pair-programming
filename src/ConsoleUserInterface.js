import { createInterface } from 'node:readline'
import { PasswordGenerator } from './PasswordGenerator.js'

/**
 * Provides a console-based user interface for generating passwords.
 */
class ConsoleUserInterface {
  /**
   * Creates a new console user interface.
   */
  constructor() {
    this.readLine = createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    this.passwordGenerator = new PasswordGenerator()
  }

  /**
   * Prompts the user with a question.
   *
   * @param {string} question - The question to ask the user.
   * @returns {Promise<string>} The user's answer.
   */
  async prompt(question) {
    return new Promise((resolve) => {
      this.readLine.question(question, (answer) => resolve(answer))
    })
  }

  /**
   * Starts the console user interface.
   *
   * @returns {Promise<void>}
   */
  async run() {
    const length = Number.parseInt(
      await this.prompt('Enter the desired password length: '),
      10
    )

    const useLetters = await this.prompt('Include letters? (y/n): ')
    const useNumbers = await this.prompt('Include numbers? (y/n): ')
    const useSpecialCharacters = await this.prompt(
      'Include special characters? (y/n): '
    )

    const password = this.passwordGenerator.generate(
      length,
      useLetters.toLowerCase() === 'y',
      useNumbers.toLowerCase() === 'y',
      useSpecialCharacters.toLowerCase() === 'y'
    )

    console.log(`Generated password: ${password}`)

    this.readLine.close()
  }
}

export { ConsoleUserInterface }