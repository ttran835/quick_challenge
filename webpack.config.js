const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
  // Get the root path

  return {
    entry: ['@babel/polyfill', `${SRC_DIR}/index.jsx`],
    output: {
      path: path.resolve(__dirname, DIST_DIR),
      filename: 'bundle.js',
    },
    stats: { warnings: false },
    module: {
      rules: [
        {
          test: /\.js?x/,
          exclude: /node_modules/,
          include: SRC_DIR,
          loader: 'babel-loader',
        },
      ],
    },
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: 6,
            compress: true,
            output: {
              comments: false,
              beautify: false,
            },
          },
        }),
      ],
      concatenateModules: true,
    },
    resolve: {
      extensions: ['.jsx', '.js'],
    },
    devServer: {
      contentBase: path.resolve(__dirname, DIST_DIR),
      compress: true,
      port: 8080,
    },
  };
};
