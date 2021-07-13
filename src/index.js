import { Whatsapp } from './Whatsapp.js'
import { File } from './File.js'
import { Chart } from './Chart.js'

async function execute () {
  const file = new File('_chat.txt')
  const whatsapp = new Whatsapp(file)
  const chartByDay = new Chart(whatsapp.chartDataByDay)
  const chartByMonth = new Chart(whatsapp.chartDataByMonth)

  File.saveJson(whatsapp.messages, 'result.json')
  File.saveJson(whatsapp.chartDataByDay, 'chart-day.json')
  File.saveJson(whatsapp.chartDataByMonth, 'chart-month.json')
  File.saveHtml(chartByDay.html, 'chart-day.html')
  File.saveHtml(chartByMonth.html, 'chart-month.html')
  await File.saveCsv(whatsapp.messages)

  console.log('finished')
}

execute()
