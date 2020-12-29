const path = require('path');

module.exports = {
  entry: './src/client/main.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  optimization: {
    minimize: false
  }
};
