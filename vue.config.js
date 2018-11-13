const path = require('path')
const projectRoot = path.resolve(__dirname);

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': `${projectRoot}/src`,
        '~': `${projectRoot}/src/assets`,
        '@img': `${projectRoot}/src/assets/images`,
        '@comp': `${projectRoot}/src/components`,
        '@views': `${projectRoot}/src/views`,
        'HTTP': `${projectRoot}/src/http`,
      }
    },
    devServer: {
      // open: true,
    }
  }
}