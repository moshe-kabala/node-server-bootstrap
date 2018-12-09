const webpack = require("webpack");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CompressionPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');



module.exports = merge(common, {
    mode: 'production',
    // devtool: 'inline-source-map',
    optimization: {
        minimizer: [new TerserPlugin()]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        // new CompressionPlugin({
        //     algorithm: 'gzip',
        //     test: /main.js/
        // })
    ]
});