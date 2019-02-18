const DirectoryNamedWebpackPlugin  = require('directory-named-webpack-plugin')
const withCSS = require('@zeit/next-css')
const withLESS = require('@zeit/next-less')

module.exports = withCSS(withLESS({
  webpack(config) {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),

      new DirectoryNamedWebpackPlugin({
        honorIndex: true
      })
    ]

    return config;
  },
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      
      '/': {
        page: '/index'
      }
    }
  }
}))