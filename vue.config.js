const path = require('path')
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: isDevelopment ? '/' : '/easy-affix/',
  outputDir: path.resolve(__dirname, './docs/'),
  css: { extract: isDevelopment },
  configureWebpack: {
    entry: './documentation/main.js',
    output: {
      libraryExport: 'default'
    }
  }
}
