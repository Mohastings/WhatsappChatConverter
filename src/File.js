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
  }

  /**
   * Convert the array to JSON and save the file
   * @param {import('./Message.js').Message[]} data
   */
  static saveJson (data) {
    fs.writeFileSync('result.json', JSON.stringify(data, null, 2))
    console.log('text saved')
  }

  /**
   * Convert the array to CSV and save the file
   * @param {import('./Message.js').Message[]} data
   */
  static saveCsv (data) {
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
    csvStringify(data, options, (err, output) => {
      if (err) {
        console.log(err)
      } else {
        fs.writeFileSync('result.csv', output)
        console.log('csv saved')
      }
    })
  }
}

export { File }
