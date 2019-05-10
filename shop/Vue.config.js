module.exports = {
  devServer: {
    proxy: '0.0.0.0'
  }
}
module.exports = {
  devServer: {
    proxy: {
      '/my': {
<<<<<<< HEAD
        target: 'http://m.maoyan.com/',
=======
        target: 'http://m.maoyan.com',
>>>>>>> fenlei
        changeOrigin: true,
        pathRewrite: {
          '^/my': ''
        }
      }
    }
  }
}
