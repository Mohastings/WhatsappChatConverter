/**
 * Whatsapp message class
 */
class Message {
  /**
   *
   * @param {date|string} date The message date
   * @param {string} person The name (or phone number)
   * @param {string} content The message itself
   */
  constructor (date, person, content) {
    /**
     * @type {date|string}
     */
    this.date = date
    /**
     * @type {string}
     */
    this.person = person
    /**
     * @type {string}
     */
    this.content = content
  }
}

export { Message }
