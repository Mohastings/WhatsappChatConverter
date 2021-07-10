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

    /**
     * The list of messages formatted for the chart
     * @type {Object[]}
     */
    this.chartData = []

    this.#setBaseContent(file)
    this.#setMessages()
    this.#setMessagesForChart()
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
        const contact = split[5]
        const content = split[6]

        return new Message(date, contact, content)
      })
      .filter(messsage => messsage != null)
  }

  #setMessagesForChart () {
    const contacts = {}
    // const dateMessages =
    this.messages.forEach(message => {
      // const date = message.date.toLocaleString()
      // const splitted = date.split(' ')
      // const newDate = new Date(message.date.replace(' ', ', ').replace('/', '-'))

      if (!contacts[message.contact + 'Chars']) {
        contacts[message.contact + 'Chars'] = 0
        contacts[message.contact + 'Messages'] = 0
      }

      // return new Message(newDate, message.contact, null, message.chars)
    })

    this.messages.forEach(message => {
      if (!this.chartData.find(m => m.date.getTime() === message.dateChart.getTime())) {
        const data = { date: message.dateChart, ...contacts }
        data[message.contact + 'Chars'] = message.chars
        data[message.contact + 'Messages'] = 1

        this.chartData.push(data)
      } else {
        const i = this.chartData.findIndex(m => m.date.getTime() === message.dateChart.getTime())
        this.chartData[i][message.contact + 'Chars'] += message.chars
        this.chartData[i][message.contact + 'Messages'] += 1
      }
    })

    console.log(this.chartData)
  }
}

export { Whatsapp }
