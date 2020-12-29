const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/client/main.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{ 
      test: /\.js$/, 
      use: 'babel-loader' 
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }]
  },
  optimization: {
    minimize: false
  }
};
