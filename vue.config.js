const path = require('path')
const projectRoot = path.resolve(__dirname);

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': `${projectRoot}/src`,
        '~': `${projectRoot}/src/assets`,
      }
    },
    devServer: {
      open: true,
      setup: (app, server) => {
        const CONFIG_CHECKS = ['VUE_APP_CLIENT_ID', 'VUE_APP_CLIENT_SECRET', 'VUE_APP_BASE_URL', 'VUE_APP_SCOPE' ];

        for (const key of CONFIG_CHECKS) {
          if (process.env[key] === undefined) {
            throw new Error(`value for ${key} is not defined.. Please setup .env variables.`);
          }
        }
      },
      before: (app, server) => {
        // app.get('/api/status', (request, response) => {
        // })
      },
      overlay: {
        warnings: true,
        errors: true,
      },
    }
  }
}