import { Whatsapp } from './Whatsapp.js'
import { File } from './File.js'

const file = new File('_chat.txt')
const whatsapp = new Whatsapp(file)

File.saveJson(whatsapp.messages, 'results.json')
File.saveJson(whatsapp.chartData, 'chart.json')
File.saveCsv(whatsapp.messages)

console.log('finished')
