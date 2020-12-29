const path = require('path');

module.exports = {
  entry: './src/client/main.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
//  optimization: {
//    minimize: false
//  }
};
