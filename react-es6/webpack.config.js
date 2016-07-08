module.exports = {
  entry: './src/main.js',
  output: { path: __dirname+"/dist/js/", filename: 'bundle.js' },
  devtool: "#inline-source-map",
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
     contentBase: './dist/',
     port:3001
  }
}