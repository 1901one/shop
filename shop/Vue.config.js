module.exports = {
  devServer: {
    proxy: '0.0.0.0'
  }
}
module.exports = {
  devServer: {
    proxy: {
      '/my': {
        target: 'http://m.maoyan.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/my': ' '
        }
      }
    }
  }
}
