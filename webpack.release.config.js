var devConfig = require("./webpack.config.js");
var webpack = require("webpack");

module.exports = Object.assign(
    {}, devConfig, {
        devtool: null,
        plugins: (devConfig.plugins || []).concat([
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
            })
        ])
    }
);
