import { Whatsapp } from './Whatsapp.js'
import { File } from './File.js'
import { Chart } from './Chart.js'
import { terminal } from './Terminal.js'

async function execute () {
  const file = await File.getChatFile()

  if (file.loaded) {
    try {
      const whatsapp = new Whatsapp(file)
      const chartByDay = new Chart(whatsapp.chartDataByDay)
      const chartByMonth = new Chart(whatsapp.chartDataByMonth)
      const chartByYear = new Chart(whatsapp.chartDataByYear)

      File.saveJson(whatsapp.messages, 'result.json')
      File.saveJson(whatsapp.chartDataByDay, 'chart-day.json')
      File.saveJson(whatsapp.chartDataByMonth, 'chart-month.json')
      File.saveJson(whatsapp.chartDataByYear, 'chart-year.json')
      File.saveHtml(chartByDay.html, 'chart-day.html')
      File.saveHtml(chartByMonth.html, 'chart-month.html')
      File.saveHtml(chartByYear.html, 'chart-year.html')
      await File.saveCsv(whatsapp.messages)

      console.log('finished')
    } catch (error) {
      terminal.red.bold(`\nAn error occurred:\n${error}\n`)
    }
  }
}

execute()
