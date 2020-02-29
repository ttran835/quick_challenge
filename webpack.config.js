const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
const TerserPlugin = require('terser-webpack-plugin');

/* To load scss Modules for React comps */
const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      localIdentName: '[name]-[local]-[hash:base64]',
    },
    sourceMap: true,
    // minimize: true,
  },
};

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true,
    // minimize: true,
  },
};

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcssrc',
    sourceMap: true,
    plugins: () => [
      autoprefixer({
        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
      }),
    ],
  },
};

module.exports = () => {
  return {
    entry: ['@babel/polyfill', `${SRC_DIR}`],
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
        {
          test: /\.scss$/,
          exclude: /\.module\.scss$/,
          use: ['style-loader', CSSLoader, postCSSLoader, 'sass-loader'],
        },
        {
          test: /\.module\.scss$/,
          use: ['style-loader', CSSModuleLoader, postCSSLoader, 'sass-loader'],
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
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
      historyApiFallback: true,
      compress: true,
      port: 8080,
    },
  };
};
