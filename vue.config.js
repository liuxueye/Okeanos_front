module.exports = {
  devServer: {
    proxy: {
      '/api2663': {
          target: 'http://localhost:2663',
          pathRewrite:{'^/api2663':''},
          ws: true,
          changeOrigin: true
      },
      '/api2666': {
        target: 'http://localhost:2666',
        pathRewrite:{'^/api2666':''},
        ws: true,
        changeOrigin: true
      },
      '/api2669': {
        target: 'http://localhost:2669',
        pathRewrite:{'^/api2669':''},
        ws: true,
        changeOrigin: true
      },
      '/api2672': {
        target: 'http://localhost:2672',
        pathRewrite:{'^/api2672':''},
        ws: true,
        changeOrigin: true
      }
    }
  }
}