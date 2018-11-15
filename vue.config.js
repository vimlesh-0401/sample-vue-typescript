const path = require('path')
const projectRoot = path.resolve(__dirname);

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': `${projectRoot}/src`,
        '~': `${projectRoot}/src/assets`,
        'HTTP': `${projectRoot}/src`,
      }
    },
    devServer: {
      // open: true,
      setup: (app, server) => {
        //Write custom handler.
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