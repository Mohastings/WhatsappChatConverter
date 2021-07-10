import { Format } from './Format.js'
import GraphemeSplitter from 'grapheme-splitter'

/**
 * Whatsapp message class
 */
class Message {
  /**
   *
   * @param {date} date The message date
   * @param {string} contact The name (or phone number)
   * @param {string} content The message itself
   * @param {number} chars The number of chars of the message
   */
  constructor (date, contact, content = null, chars = null) {
    const splitter = new GraphemeSplitter()
    const format = new Format()

    /**
     * @type {date}
     */
    this.dateChart = new Date(date)
    this.dateChart.setHours(0, 0, 0, 0)

    /**
     * @type {date}
     */
    this.date = date.toLocaleString().replace(',', '')
    /**
     * @type {string}
     */
    this.contact = format.replaceContact(format.cleanContact(contact))
    /**
     * @type {string}
     */
    // this.content = content

    /**
     * @type {number}
     */
    this.chars = !!chars ? chars : splitter.countGraphemes(content)
  }
}

export { Message }
