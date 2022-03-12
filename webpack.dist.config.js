const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CssMqPackerPlugin = require('css-mqpacker');
const CssNanoPlugin = require('cssnano');
const TerserPlugin = require('terser-webpack-plugin');
const webpackConfig = require('./webpack.config.js');

module.exports = {
  ...webpackConfig,
  mode: 'production',
  devtool: false,
  output: {
    ...webpackConfig.output,
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/,
        cssProcessor: CssMqPackerPlugin,
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/,
        cssProcessor: CssNanoPlugin,
        cssProcessorPluginOptions: {
          preset: ['advanced', { zindex: false }],
        },
      }),
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
