const fs = require('fs');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { appComponentsConfig } = require('./paths');

const getEntriesPath = () => {
  let entry = { index: path.resolve(__dirname, '../src/components/index')};
  const files = fs
    .readdirSync(appComponentsConfig)
    .filter((item) => fs.statSync(path.join(appComponentsConfig, item)).isDirectory());
  for (const name of files) {
    const lowerName = name.toLowerCase();
    entry[lowerName] = path.resolve(__dirname, `../src/components/${name}/index`);
  }
  return entry;
};
const productConfig = () => {
  const entries = getEntriesPath();
  return {
    entry: entries,
    mode: 'production',
    bail: true,
    output: {
      clean: true,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),
    ],
    externals: {
      react: {
        root: 'react',
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react'
      },
      "react-dom": {
        root: 'react-dom',
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom'
      },
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false, // Remove LICENSE.txt in build/js
        }),
        new CssMinimizerPlugin(),
      ],
      // splitChunks: {
      //   chunks: 'all',
      //   cacheGroups: {
      //     vendors: {
      //       // Package third-party packages into separate files
      //       test: /[\\/]node_modules[\\/]/,
      //       name: 'vendors',
      //       priority: -10,
      //     },
      //   },
      // },
    },
  };
};
module.exports = merge(productConfig(), commonConfig('production'));
