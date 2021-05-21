const { environment } = require('@rails/webpacker');

// Bootstrap 以外でも jQuery を使用する
const webpack = require('webpack');
environment.plugins.append(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  })
);

module.exports = environment;
