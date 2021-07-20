import chalk from "chalk"
import fs from 'fs'

/**
 * Terminal Kit simplified class
 */
export class Terminal {
  /**
   * Display the interface to select a file and returns the file path
   * @returns {Promise<string|error>}
   */
  static async getPath () {
    console.log(chalk.blue.bold('_chat.txt not found. Please choose the chat export to continue:'))
    const filesList = fs.readdirSync('.').filter(file => file.match(/.*?\.txt/))
    console.log(filesList)
    // try {
    //   const input = await term.fileInput({ baseDir: './', autoCompleteMenu: true, autoCompleteHint: true })
    //   term.processExit()
    //   return input
    // } catch (error) {
    //   term.red.bold(`\nAn error occurred:\n${error}`)
    //   term.processExit()
    //   throw error
    // }
  }
}
