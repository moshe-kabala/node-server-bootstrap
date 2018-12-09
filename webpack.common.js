const path = require("path");
const fs = require('fs');
const nodeExternals = require('webpack-node-externals')
const externals = nodeExternals();
const webpack = require("webpack");



console.log(externals)

module.exports = {
    entry: {
        main: "./src/main.ts",
        dynamic_query: "./src/dynamic_query.ts",
    },

    target: 'node',
    node: {
        __dirname: false,
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    },


    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".js", ".json"],
        // alias: {
        //     '@': path.resolve(__dirname, 'src/'),
        //     'ui-logic': path.resolve(__dirname, './ui-logic'),
        //     'react-ui': path.resolve(__dirname, './react-ui')
        // }
    },


    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
        ]
    },
    externals,
    //externals: {
    //    uws: "uws"
    //},
};