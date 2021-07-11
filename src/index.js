import { Whatsapp } from './Whatsapp.js'
import { File } from './File.js'
import { Chart } from './Chart.js'

async function execute () {
  const file = new File('_chat.txt')
  const whatsapp = new Whatsapp(file)

  File.saveJson(whatsapp.messages, 'results.json')
  File.saveJson(whatsapp.chartData, 'chart.json')
  Chart.generateHtml(whatsapp.chartData)
  await File.saveCsv(whatsapp.messages)

  console.log('finished')
}

execute()
