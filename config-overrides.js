'use strict';

const webpack = require('webpack');

module.exports = (config, env) => {
  config.plugins.push(
    new webpack.ProvidePlugin({
      '$': "jquery",
      'jQuery': "jquery",
      'window.jQuery': "jquery",
      'window.$': 'jquery'
    })
  )
  return config
}
