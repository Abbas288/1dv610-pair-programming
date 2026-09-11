import { createInterface } from 'node:readline'
import { generatePassword } from './password-generator.js'

/**
 * Runs the console interface for generating a random password.
 */
function runConsoleInterface() {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  readline.question('Ange lösenordslängd: ', (length) => {
    const password = generatePassword(length)

    console.log(`Lösenordet: ${password}`)

    readline.close()
  })
}

export { runConsoleInterface }