const withCSS = require('@zeit/next-css')
const withLESS = require('@zeit/next-less')
const withMDX = require('@zeit/next-mdx')()

/**
 * @see https://github.com/zeit/next.js#static-html-export
 */
module.exports = withMDX(withCSS(withLESS({
  pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'mdx'],
  webpack(config) {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
    ]
    config.node = {
      fs: 'empty'
    }

    return config;
  },
  async exportPathMap(defaultPathMap) {
    return defaultPathMap
  }
})))
