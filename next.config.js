const withPreact = (process.env.NODE_ENV === 'production')
  ? require('@zeit/next-preact')
  : (config = {}) => config

module.exports = withPreact({
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      
      '/': {
        page: '/index'
      }
    }
  }
})