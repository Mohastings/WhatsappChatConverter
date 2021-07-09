import { Format } from './Format.js'
import GraphemeSplitter from 'grapheme-splitter'

/**
 * Whatsapp message class
 */
class Message {
  /**
   *
   * @param {date|string} date The message date
   * @param {string} contact The name (or phone number)
   * @param {string} content The message itself
   */
  constructor (date, contact, content) {
    const splitter = new GraphemeSplitter()
    const format = new Format()

    /**
     * @type {date|string}
     */
    this.date = date.toLocaleString().replace(',', '')
    /**
     * @type {string}
     */
    this.contact = format.replaceContact(format.cleanContact(contact))
    /**
     * @type {string}
     */
    this.content = content

    /**
     * @type {number}
     */
    this.chars = splitter.countGraphemes(content)
  }
}

export { Message }
