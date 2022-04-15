// Replace default @vue config by custom including proxy
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: ["vuex-module-decorators",'vuetify'],
  // proxy all webpack dev-server requests starting with /api
  // to our Spring Boot backend (localhost:8098) using http-proxy-middleware
  // see https://cli.vuejs.org/config/#devserver-proxy
  devServer: {
    port: 8082,
    proxy: {
      "/api": {
        target: "http://localhost:8090",
        ws: true,
        changeOrigin: true,
      },
    },
  },

  // Change build paths to make them Maven compatible
  // see https://cli.vuejs.org/config/
  outputDir: "target/dist",

  assetsDir: "static",

  pluginOptions: {
    i18n: {
      locale: undefined,
      fallbackLocale: undefined,
      localeDir: undefined,
      enableInSFC: undefined,
      enableBridge: undefined
    },
  },
})
