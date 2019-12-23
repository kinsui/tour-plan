const path = require('path');
const fs = require('fs');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('img', resolve('src/assets/img'))
      .set('font', resolve('src/assets/font'))
      .set('css', resolve('src/assets/css'));
  },
  devServer: {
    https: {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem'),
      ca: fs.readFileSync('./rootCA.pem'),
    },
    port: 443,
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass')
      },
    },
  }
};
