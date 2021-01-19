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
                    "style-loader", // Inject styles(JS) into DOM
                    "css-loader",   // Transform CSS into CommonJS
                    "sass-loader"   // Transform SCSS into CSS
                ],
            }]

    }
})