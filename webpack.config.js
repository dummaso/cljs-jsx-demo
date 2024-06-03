const path = require('path')

module.exports = {
  mode: process.env['NODE_ENV'] || 'development',
  optimization: {
    minimize: process.env['NODE_ENV'] === 'production',
  },
  entry: ['./target/external.js'],
  output: {
    filename: 'libs.js',
    path: path.resolve(__dirname, 'public', 'js'),
  },
  target: 'web',
  resolve: {
    alias: {
      js: path.resolve(__dirname, 'src/gen'),
    },
    extensions: ['.js', '.jsx'],
  },
}
