const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "eval", //prod : hidden-source-map
  devServer: {
    hot: true,
    port: 3001,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  entry: {
    app: "./src/index.tsx",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./src/index.html"}),
    new CleanWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
