/**
 * Entry point for the application.
 */

import { ConsoleUserInterface } from './ConsoleUserInterface.js'

const consoleUI = new ConsoleUserInterface()

consoleUI.run().catch((error) => {
  console.error('An error occurred:', error.message)
  process.exit(1)
})