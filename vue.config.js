// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({ transpileDependencies: true })
module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        changeOrigin: true,
        ['/api']: '',
        ws:false
      },
    }
  }
}
