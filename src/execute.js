import fs from 'fs'
// import { replacements } from '../replacement.js'
import { Whatsapp } from './Whatsapp.js'

import json2xls from 'json2xls'
import csvStringify from 'csv-stringify'

export function execute () {
  const whatsapp = new Whatsapp('_chat.txt')
  /**
   * @type object
   */
  //   .replace(/ /g, ' ')
  //   .replace(/‑/g, '-')
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
  fs.writeFileSync('test.txt', JSON.stringify(whatsapp.messages))

  const xls = json2xls(whatsapp.messages)
  fs.writeFileSync('data.xlsx', xls, 'binary')
  console.log('xlsx saved')

  // const csv = csvStringify(whatsapp.messages, { delimiter: ';', quoted: true })
  const options = {
    delimiter: ';',
    quoted: true,
    header: true,
    columns: ['date', 'person', 'content'],
  }
  csvStringify(whatsapp.messages, options, (err, output) => {
    if (err) {
      console.log(err)
    } else {
      fs.writeFileSync('data.csv', output, 'binary')
    }
  })
  // const spl = file
  // const result = file.match(contentRegex)
  // console.log(splitted)
  // [23/02/2014, 18:04:44]
  console.log('finished')
}
