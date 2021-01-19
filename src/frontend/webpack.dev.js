const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './static/',
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader", // 3. Inject styles(JS) into DOM
                    "css-loader",   // 2. Transform CSS into CommonJS
                    "sass-loader"   // 1. Transform SCSS into CSS
                ],
            }]

    }
})