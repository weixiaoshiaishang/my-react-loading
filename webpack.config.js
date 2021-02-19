const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/Loading.jsx',
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
    libraryTarget: 'umd'

  },
  // optimization: false,
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"
        ]
      }
    ]
  }
}