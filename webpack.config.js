const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    "filename": "[name].js", // output이 동적으로 변하도록 만들어 줌
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /.s?css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ]
  },
  devServer: {
    static: './dist',
    contentBase: __dirname + '/dist/',
    host: 'localhost',
    port: 3000,
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
    runtimeChunk: 'single',
    minimize: true,
  },
  // plugins: [
  //   new HtmlWebpackPlugin({ template: './public/index.html' }), new MiniCssExtractPlugin(), new BundleAnalyzerPlugin()
  // ]
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }), new MiniCssExtractPlugin()
  ]
}