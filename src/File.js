import fs from 'fs'
import json2xls from 'json2xls'
import csvStringify from 'csv-stringify'
import { Message } from './Message.js'
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
   * Convert the array to Excel and save the file
   * @param {import('./Message.js').Message[]} data
   */
  static saveXlsx (data) {
    const excelData = data.map(m => {
      const excelDate = m.date.toLocaleString().replace(',', '')
      return new Message(excelDate, m.contact, m.content)
    })
    const xls = json2xls(excelData)
    fs.writeFileSync('result.xlsx', xls, 'binary')
    console.log('xlsx saved')
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
        'person',
        'content',
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
