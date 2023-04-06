const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => ({
  name: 'client webpack config',
  target: 'web',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  entry: './client/index.jsx',
  mode: env.production ? 'production' : 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    compress: true,
    port: 3001,
  },
  plugins: [new HtmlWebpackPlugin({
    template: './client/assets/index.html'
  })],
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
})
