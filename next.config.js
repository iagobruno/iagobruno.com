module.exports = {
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      
      '/': {
        page: '/index'
      }
    }
  }
}