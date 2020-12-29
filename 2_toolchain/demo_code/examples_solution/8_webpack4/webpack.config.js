const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/client/main.js',
  output: {
    filename: '[name]-[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{ 
      /* Rule for JS files */
      /* transform JS files with babel */
      test: /\.js$/, 
      use: 'babel-loader' 
    }, {
      /* Rule for CSS files */
      /* parse url() imports, and then copy the CSS files into dist/ */
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }, {
      /* Rule for image files : copy them into dist/, and generates a JS module
       * that gives the correct path to the file into the dist/ directory */
      test: /\.(?:ico|gif|png|jpg|jpeg)$/i, 
      use: {
        loader: 'file-loader',
        options: {
          name: '[name]-[hash].[ext]'
        }
      }
    }]
  },
  plugins: [
    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      title: 'My Application',
      template: path.resolve(__dirname, 'src/client/assets/index.template.html'), // template file
      filename: 'index.html', // output file
    }),
    // Extracts CSS into separate files
    // Note: style-loader is for development, MiniCssExtractPlugin is for production
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[hash].css',
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    minimize: false
  }
};
