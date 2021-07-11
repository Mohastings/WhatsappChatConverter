import fs from 'fs'
import csvStringify from 'csv-stringify'
/**
 * File manipulation class
 */
class File {
  /**
   * Create a file intance
   * @param {string} filePath The chat export path
   */
  constructor (filePath) {
    /**
     * @type string
     */
    this.content = fs.readFileSync(filePath).toString()
    console.log(`${filePath} loaded`)
  }

  /**
   * Convert the array to JSON and save the file
   * @param {import('./Message.js').Message[]} data
   * @param {string} name
   */
  static saveJson (data, name) {
    fs.writeFileSync(name, JSON.stringify(data, null, 2))
    console.log(`${name} saved`)
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
          console.log('result.csv saved')
          resolve(true)
        }
      })
    })
  }
}

export { File }
