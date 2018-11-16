const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => ({
  entry: {
    'bundle': [
      './src/index.js'
    ]
  },
  output: {
		filename: `[name].js`,
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true, url: false } },
          { loader: "postcss-loader", options: { sourceMap: true, zindex: false } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ]
      },
    ]
  },
  plugins: [
		new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devtool: 'source-map',
	devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 9000,
    hot: true,
    contentBase: './',
  }
});