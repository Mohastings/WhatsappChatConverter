import terminalKit from 'terminal-kit'
import cliProgress from 'cli-progress'

export const terminal = terminalKit.terminal
/**
 * Terminal Kit simplified class
 */
export class Terminal {
  #bar
  #current
  #size
  /**
   * Display the interface to select a file and returns the file path
   * @returns {Promise<string|error>}
   */
  static async loadFile () {
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

  setProgress (size) {
    this.#bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
    this.#bar.start(size, 0)
    this.#current = 0
    this.#size = size
  }

  updateProgress () {
    this.#current += 1
    this.#bar.update(this.#current)
  }

  endProgress () {
    this.#bar.update(this.#size)
    this.#bar.stop()
  }
}
