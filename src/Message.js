import { Format } from './Format.js'
import GraphemeSplitter from 'grapheme-splitter'

/**
 * Whatsapp message class
 */
class Message {
  /**
   *
   * @param {string} date The message date
   * @param {string} contact The name (or phone number)
   * @param {string} content The message itself
   * @param {number} chars The number of chars of the message
   * @instance { date: string, contact:string, chars: number, content?:string }
   */
  constructor (date, contact, content = null, chars = null) {
    const splitter = new GraphemeSplitter()
    // const splittedDate = date.toISOString().split('-')
    /**
     * @type {date}
     */
    // this.dateChart = new Date(date)
    // this.dateChart.setHours(0, 0, 0, 0)

    /**
     * @type {date}
     */
    // this.monthChart = `${splittedDate[1]}/${splittedDate[0]}`

    /**
     * @type {string}
     */
    this.date = date
    /**
     * @type {string}
     */
    this.contact = contact

    if (!!content) {
      /**
       * @type {string}
       */
      this.content = content
    }

    /**
     * @type {number}
     */
    this.chars = !!chars ? chars : splitter.countGraphemes(content)
  }
}

export { Message }
