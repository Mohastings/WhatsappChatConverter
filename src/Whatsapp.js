import { Message } from './Message.js'
/**
 * Whatsapp messages manipulation class
 */
class Whatsapp {
  #content = ''
  #messageRegEx = /(\[\d{2}\/\d{2}\/\d{4},\s\d{2}:\d{2}:\d{2}\])\s/gm
  #contentSplitRegex = /\[(\d{2})\/(\d{2})\/(\d{4}),\s(\d{2}:\d{2}:\d{2})\]\s(.+?):\s([\s\S]+)/

  /**
   * @param {import('./File.js').File} file file The exported file
   */
  constructor (file) {
    /**
     * The list of messages
     * @type Message[]
     */
    this.messages = []

    this.#setBaseContent(file)
    this.#setMessages()
  }

  /**
   * Read the file and set the base #content
   * @param {import('./File.js').File} file The chat export file path
   */
  #setBaseContent (file) {
    // Replace all carriage returns by line breaks
    this.#content = file.content.replace(/\r\n/, '\n').replace(/\r/, '\n').split('\n')
  }

  /**
   * Set each message as a string as a Message entry
   */
  #setMessages () {
    // Read each line and put them as a string entry. If the line does not match
    // the messageRegEx, includes in the previus entry with a line break
    for (let i = 0; i < this.#content.length; i++) {
      const message = this.#content[i]
      if (message.match(this.#messageRegEx)) {
        this.messages.push(message)
      } else {
        // Join the lines that are continuation of the previus message
        this.messages[i - 1] += `\n${message}`
      }
    }

    // Replace each entry by the Message instance and remove the null entries
    this.messages = this.messages
      .map(m => {
        const split = this.#contentSplitRegex.exec(m)
        if (!split) {
          return null
        }

        const date = new Date(`${split[3]}/${split[2]}/${split[1]}, ${split[4]}`)
        const person = split[5]
        const content = split[6]

        return new Message(date, person, content)
      })
      .filter(messsage => messsage != null)
  }
}

export { Whatsapp }
