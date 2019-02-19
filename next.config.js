const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withLESS = require('@zeit/next-less')

module.exports = withTypescript(withCSS(withLESS({
  pageExtensions: ['jsx', 'js', 'tsx'],
  webpack(config) {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
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
})))