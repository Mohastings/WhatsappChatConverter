import fs from 'fs'
import { Terminal } from './Terminal.js'
import csvStringify from 'csv-stringify'
import chalk from 'chalk'

/**
 * File manipulation class
 */
class File {
  /**
   * Create a file intance
   * @param {string} filePath The chat export path
   */
  constructor (filePath) {
    try {
      /**
       * @type string
       */
      this.content = fs.readFileSync(filePath).toString()
      this.loaded = true
      console.log(chalk.bold(`${filePath} loaded`))
    } catch (error) {
      console.log(chalk.red(`Error loading file:\n${error}`))
      return { loaded: false }
    }
  }

  /**
   * Load a new file
   * First try to load witht the default name and if not found, display the interface to load a file
   * @returns {Promise<File|Error>}
   */
  static async getChatFile () {
    /**
     * @type {string[]}
     */
    const content = fs.readdirSync('./')
    let filePath = content.find(dir => dir === '_chat.txt')

    if (filePath) {
      console.log(chalk.bold('_chat.txt found'))
    } else {
      filePath = await Terminal.loadFile()
    }
    return (new File(filePath))
  }

  /**
   * Convert the array to JSON and save the file
   * @param {import('./Message.js').Message[]} data
   * @param {string} name
   */
  static saveJson (data, name) {
    fs.writeFileSync(name, JSON.stringify(data, null, 2))
  }

  static saveHtml (html, name) {
    fs.writeFileSync(name, html)
  }

  /**
   * Convert the array to CSV and save the file
   * @param {import('./Message.js').Message[]} data
   * @returns {Promise<true|Error>}
   */
  static async saveCsv (data) {
    const options = {
      delimiter: ',',
      quoted: true,
      header: true,
      columns: [
        'date',
        'contact',
        'content',
        'chars',
      ],
    }

    return new Promise((resolve, reject) => {
      csvStringify(data, options, (err, output) => {
        if (err) {
          console.log(err)
          reject(err)
        } else {
          fs.writeFileSync('result.csv', output)
          resolve(true)
        }
      })
    })
  }
}

export { File }
