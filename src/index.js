import { Whatsapp } from './Whatsapp.js'
import { File } from './File.js'
import { Chart } from './Chart.js'
import { terminal, Terminal } from './Terminal.js'

async function execute () {
  const file = await File.getChatFile()

  if (file.loaded) {
    try {
      const whatsapp = new Whatsapp(file)
      const chartByDay = new Chart(whatsapp.chartDataByDay)
      const chartByMonth = new Chart(whatsapp.chartDataByMonth)
      const chartByYear = new Chart(whatsapp.chartDataByYear)

      const jsonProgress = new Terminal()
      terminal('Saving JSON files\n')
      jsonProgress.setProgress(4)
      File.saveJson(whatsapp.messages, 'result.json')
      jsonProgress.updateProgress()
      File.saveJson(whatsapp.chartDataByDay, 'chart-day.json')
      jsonProgress.updateProgress()
      File.saveJson(whatsapp.chartDataByMonth, 'chart-month.json')
      jsonProgress.updateProgress()
      File.saveJson(whatsapp.chartDataByYear, 'chart-year.json')
      jsonProgress.endProgress()

      const htmlProgress = new Terminal()
      terminal('Saving HTML files\n')
      htmlProgress.setProgress(3)
      File.saveHtml(chartByDay.html, 'chart-day.html')
      htmlProgress.updateProgress()
      File.saveHtml(chartByMonth.html, 'chart-month.html')
      htmlProgress.updateProgress()
      File.saveHtml(chartByYear.html, 'chart-year.html')
      htmlProgress.endProgress()

      await File.saveCsv(whatsapp.messages)

      console.log('finished')
    } catch (error) {
      terminal.red.bold(`\nAn error occurred:\n${error}\n`)
    }
  }
}

execute()
