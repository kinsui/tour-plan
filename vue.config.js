const path = require('path');

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
};
