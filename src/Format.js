import fs from 'fs'
class Format {
  /**
   * @type {{ original: 'phone or name', replacement: 'new name' }[]}
   */
  #replacement = null
  constructor () {
    const file = fs.readFileSync('replacement.json').toString()
    this.#replacement = JSON.parse(file)
  }

  cleanContact (contact) {
    const clean = contact
      .replace(/\s/g, ' ')
      .replace(/‑/g, '-')
      .replace(/[\x00-\x09\x0B-\x0C\x0E-\x1F\x7F-\x9F]/g, '')
      // .replace(/[^\x20-\x7E]+/g, '')
      .replace(String.fromCharCode(8234), '')
      .replace(String.fromCharCode(8236), '')
    const replaced = this.replaceContact(clean)
    // ..replace(/ /g, ' ')
    return replaced
  }

  replaceContact (contact) {
    const replacement = this.#replacement.filter(r => r.original === contact)
    if (replacement.length > 0) {
      const replaced = replacement[0].replacement
      return replaced
    }
    return contact
  }
}

export { Format }

// const contentArray = []
// for (let i = 0; i < content.length; i++) {
//   if (content[i] === String.fromCharCode(160)) {
//     contentArray.push(' ')
//   } else if (content[i] !== String.fromCharCode(8206)) {
//     contentArray.push(content[i])
//   }
// }
// content = contentArray.join('')
// for (const replacement of replacements) {
//   console.log(replacement)
//   content = content.replace(replacement.rx, replacement.value)
// }
// fs.writeFileSync('test.txt', content)

// let content = fs.readFileSync('_chat.txt').toString()
// content = content.replace(/\r\n/, '\n').replace(/\r/, '\n').split('\n')
// const messages = []
// for (let i = 0; i < content.length; i++) {
//   const messageRegEx = /(\[\d{2}\/\d{2}\/\d{4},\s\d{2}:\d{2}:\d{2}\])\s/gm
//   const message = content[i]
//   if (message.match(messageRegEx)) {
//     messages.push(message)
//   } else {
//     messages[i - 1] += `%$£%$£%$£${message}`
//   }
// }

// const contentRegex = /\[(\d{2})\/(\d{2})\/(\d{4}),\s(\d{2}:\d{2}:\d{2})\]\s(.+):\s(.+)/

// const splitted = messages.map(m => {
//   const split = contentRegex.exec(m)
//   if (!split) {
//     return null
//   }

//   return {
//     date: new Date(`${split[3]}/${split[2]}/${split[1]}, ${split[4]}`),
//     person: split[5],
//     message: split[6].replace(/%\$£%\$£%\$£/g, '\n'),
//   }
// }).filter(messsage => messsage != null)
// }
