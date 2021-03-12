const { configure } = require('quasar/wrappers');
module.exports.build = configure(function () {
  return {
    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      vueRouterMode: 'history', // 设置Vue路由器模式：‘hash’或’history’
      // transpile: false,

      // Add dependencies for transpiling with Babel (Array of string/regex)
      // (from node_modules, which are by default not transpiled).
      // Applies only if "transpile" is set to true.
      // transpileDependencies: [],

      // rtl: false, // https://quasar.dev/options/rtl-support
      // preloadChunks: true,
      // showProgress: false,
      // gzip: true,
      // analyze: true,

      // Options below are automatically set depending on the env, set them if you want to override
      // extractCSS: false,

      // https://quasar.dev/quasar-cli/handling-webpack
      publicPath: '', // 部署时的公共路径
      extractCSS: true, // 从Vue文件中提取CSS
      // https://quasar.dev/quasar-cli/handling-webpack
      chainWebpack: config => {
        debugger
        // 解析HTML模板
        config.module
          .rule('html')
          .test(/(?<!\.template)\.(html)$/)
          .use('html-loader')
          .loader('html-loader')
          .end()

          //配置别名，在项目中可缩减引用路径
          config.resolve.alias
          // 支持解析html模版
          .set('vue$', 'vue/dist/vue.js')
          // @ 符号表示 src
          .set('@', require('path').resolve(__dirname, '../src'))
      }
    }
  }
})