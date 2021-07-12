import { Whatsapp } from './Whatsapp.js'
import { File } from './File.js'
import { Chart } from './Chart.js'

async function execute () {
  const file = new File('_chat.txt')
  const whatsapp = new Whatsapp(file)
  const chart = new Chart(whatsapp.chartData)

  File.saveJson(whatsapp.messages, 'result.json')
  File.saveJson(whatsapp.chartData, 'chart.json')
  File.saveHtml(chart.html, 'chart.html')
  await File.saveCsv(whatsapp.messages)

  console.log('finished')
}

execute()
