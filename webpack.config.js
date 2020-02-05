const { join, resolve } = require('path')

module.exports = {
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  context: __dirname,
  devtool: 'source-maps',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, './client'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
