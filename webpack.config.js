var webpack = require('webpack');

module.exports = {
  entry: {
    index: "./app/index.js",
    vendor: ["jquery", "bootstrap"] 
  },
  output: {
    filename: "[name].js",
    path: "./dist"
  },
  module: {
    loaders: [
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery'  },
      { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff"  },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream"  },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file"  },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"  }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js")
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   "window.jQuery": "jquery"
    // })
  ],
}
