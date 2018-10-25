const DirectoryNamedWebpackPlugin  = require('directory-named-webpack-plugin')
const withCSS = require('@zeit/next-css')
const withLESS = require('@zeit/next-less')
const withPreact = (process.env.NODE_ENV === 'production')
  ? require('@zeit/next-preact')
  : (config = {}) => config

module.exports = withCSS(withLESS(withPreact({
  webpack(config) {
    let newConfigs = {
      resolve: {
        plugins: [
          new DirectoryNamedWebpackPlugin({
            honorIndex: true
          })
        ]
      }
    }

    return Object.assign({}, config, newConfigs)
  },
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      
      '/': {
        page: '/index'
      }
    }
  }
})))