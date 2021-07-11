import fs from 'fs'

class Chart {
  static generateHtml (chartData) {
    const chartDataRegEx = /JSON_FILE_GOES_HERE/g
    const html = fs.readFileSync('./src/chart-base.html').toString()

    const updatedHtml = html.replace(chartDataRegEx, JSON.stringify(chartData))

    fs.writeFileSync('chart.html', updatedHtml)
    console.log('save or respond?')
  }
}

export { Chart }
