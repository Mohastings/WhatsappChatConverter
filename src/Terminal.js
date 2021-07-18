import fs from 'fs'
import terminalKit from 'terminal-kit'

export const terminal = terminalKit.terminal
/**
 * Terminal Kit simplified class
 */
export class Terminal {
  /**
   * Display the interface to select a file and returns the file path
   * @returns {Promise<string|error>}
   */
  static async loadFile () {
    // return new Promise((resolve, reject) => {
    terminal.blue.bold('\nPlease choose the chat export to process (press tab to display the auto-complete): ')
    try {
      const input = await terminal.fileInput({ baseDir: './', autoCompleteMenu: true, autoCompleteHint: true })
      terminal.processExit()
      return input
    } catch (error) {
      terminal.red.bold(`\nAn error occurred:\n${error}`)
      terminal.processExit()
      throw error
    }
  }
}
