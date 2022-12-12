module.exports = {
  devServer: {
    proxy: {
      '^api': {
        target: 'http://localhost:5000',
        chanelOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/'},
      },
    }
  }
}
