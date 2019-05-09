module.exports = {
  devServer: {
    proxy: '0.0.0.0'
  }
}
module.exports = {
  devServer: {
    proxy: {
      '/shop': {
        target: 'http://test.happymmall.com',
        changeOrigin: true,
        pathRewrite: {
          '^/shop': ''
        }
      }
    }
  }
}
