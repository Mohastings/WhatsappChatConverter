import { Format } from './Format.js'

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
    const format = new Format()
    /**
     * @type {date|string}
     */
    this.date = date
    /**
     * @type {string}
     */
    this.contact = format.cleanContact(contact)
    /**
     * @type {string}
     */
    this.content = content
  }
}

export { Message }
