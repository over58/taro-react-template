const chalk = require('chalk')
var connect = require('connect')
const { run } = require('runjs')
var serveStatic = require('serve-static')

const rawArgv = process.argv.slice(2)
const args = rawArgv.join(' ')
const report = rawArgv.includes('--report')

run(`yarn run build:h5-local ${args}`)

const port = 9526
const publicPath =  '/'


const app = connect()
app.use(
  publicPath,
  serveStatic('./dist/h5', {
    index: ['index.html', '/']
  })
)

app.listen(port, function () {
  console.log(chalk.green(`> Preview at  http://localhost:${port}`))
  if (report) {
    console.log(chalk.green(`> Report at  http://localhost:${port}/report.html`))
  }
})

