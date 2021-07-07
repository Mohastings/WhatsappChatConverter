import fs from 'fs'
import { Message } from './Message.js'

export class Whatsapp {
  #content = ''
  #messageRegEx = /(\[\d{2}\/\d{2}\/\d{4},\s\d{2}:\d{2}:\d{2}\])\s/gm
  #contentSplitRegex = /\[(\d{2})\/(\d{2})\/(\d{4}),\s(\d{2}:\d{2}:\d{2})\]\s(.+?):\s(.+)/

  constructor (file) {
    this.messages = []

    this.#setBaseContent(file)

    this.#setMessages()

    this.messages = this.messages
      .map(m => {
        const split = this.#contentSplitRegex.exec(m)
        if (!split) {
          return null
        }

        const date = new Date(`${split[3]}/${split[2]}/${split[1]}, ${split[4]}`)
        const person = split[5]
        const content = split[6].replace(/%\$£%\$£%\$£/g, '\n')

        return new Message(date, person, content)
      })
      .filter(messsage => messsage != null)
  }

  #setBaseContent (file) {
    this.#content = fs.readFileSync(file).toString()
    this.#content = this.#content.replace(/\r\n/, '\n').replace(/\r/, '\n').split('\n')
  }

  #setMessages () {
    for (let i = 0; i < this.#content.length; i++) {
      const message = this.#content[i]
      if (message.match(this.#messageRegEx)) {
        this.messages.push(message)
      } else {
        this.messages[i - 1] += `%$£%$£%$£${message}`
      }
    }
  }
}
