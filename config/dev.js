const path = require('path')

const rawArgv = process.argv.slice(2)
const report = rawArgv.includes('--report')

// const apiUrl = '' // 测试

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  weapp: {},
  h5: {
    devServer: {
      port: 9000,
      contentBase: path.join(__dirname, 'src'),
      allowedHosts: ['localhost'],
      hotOnly: true,
      hot: true,
      proxy: {
        // '/XXX': {
        //   target: apiUrl,
        //   ws: true,
        //   changeOrigin: true,
        //   secure: false
        // }
      }
    },
    webpackChain(chain) {
      if (report) {
        console.log('report')
        chain.merge({
          plugin: {
            install: {
              plugin: require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
              args: [
                {
                  port: 9526,
                  analyzerMode: 'static'
                }
              ]
            }
          }
        })
      }
    }
  }
}
