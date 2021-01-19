const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Copies index.html into dist folder

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].[contentHash].css"}),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            filename: './index.html',
            template: "./static/html/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, //3. Extract css into files
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader" //1. Turns sass into css
                ]
            }
        ]
    }
});