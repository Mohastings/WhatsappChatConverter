import { Whatsapp } from './Whatsapp.js'
import { File } from './File.js'

export function execute () {
  const file = new File('_chat.txt')
  const whatsapp = new Whatsapp(file)

  File.save(whatsapp.messages)
  File.saveXlsx(whatsapp.messages)
  File.saveCsv(whatsapp.messages)

  console.log('finished')
}
