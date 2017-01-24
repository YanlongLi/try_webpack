var path = require('path');
var webpack = require('webpack');
// var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin.js");



module.exports = {
    entry: {
        "page/index": "./app/page/index.js",
        "page1/index": "./app/page1/index.js",
        "page2/index": "./app/page2/index.js",
        "routerApp/index": "./app/routerApp/index.js"
        // "vendor": ["jquery", "bootstrap", "angular"] 
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        chunkFileName: "[name].bundle.js",
        publicPath: "/dist/"
    },
    module: {
        root: ["./", "node_modules"],
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            exclude: [
                path.join(__dirname, "node_modules")
            ]
        }, {
            test: /bootstrap\/js\//,
            loader: 'imports?jQuery=jquery'
        }, {
            test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=application/octet-stream"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=image/svg+xml"
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("CommonsChunk.js")
        // new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js", Infinity)
        // new webpack.ProvidePlugin({
        //   $: "jquery",
        //   jQuery: "jquery",
        //   "window.jQuery": "jquery"
        // })
    ],
}
