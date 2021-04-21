module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {},
  mini: {},
  h5: {
    webpackChain(chain) {
      chain.merge({
        optimization: {
          splitChunks: {
            minSize: 30000,
            minChunks: 2,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: false,
            chunks: 'all',
            cacheGroups: {
              vendors: {
                test: /([\\/]node_modules[\\/]|css)/,
                name: 'chunk-vendors',
                chunks: 'initial',
                priority: 2,
                enforce: true,
                minChunks: 2
              },
              common: {
                test: /\.js$/,
                name: 'chunk-common',
                chunks: 'initial',
                reuseExistingChunk: true,
                priority: 1,
                minChunks: 2
              }
            }
          }
        }
      })
    }
  }
}
