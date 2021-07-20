export const terminal = console.log
/**
 * Terminal Kit simplified class
 */
export class Terminal {
  /**
   * Display the interface to select a file and returns the file path
   * @returns {Promise<string|error>}
   */
  static async loadFile () {
    // term.blue.bold('\n_chat.txt not found. Please choose tha chat export to continue (press tab to display the auto-complete): ')
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
