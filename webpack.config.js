var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var static_project_path = __dirname + "/django_project_template/static";

module.exports = {
    entry: {
        "app": "./app/App.jsx",
        "vendor": [
            "axios",
            "core-decorators",
            "react",
            "react-dom",
            "react-redux",
            "react-router",
            "react-router-redux",
            "redux"
        ],
        "style": "./scss/style.scss",
    },
    context: static_project_path,
    output: {
        path: path.resolve(static_project_path, "bundle"),
        filename: "[name]-bundle.js",
        publicPath: "/static/bundle/",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    // stage-1 for es-class-fields-and-static-properties
                    presets: ['es2015', 'react', 'stage-1'],
                    plugins: ['transform-decorators-legacy'] // for @ syntax
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(["css", "sass"])
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // for bootstrap css
            {
                test: /\.(woff|woff2|ttf|eot|svg|png|gif|ico|jpg)($|\?)/,
                loader: 'file-loader?name=' + '[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor-bundle.js"),
        new ExtractTextPlugin("[name].css")
    ],
    devtool: "source-map",
    resolve: {
        root: [
            path.resolve(static_project_path)
        ],
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },
    // devServer: {
    //     proxy: {
    //         '*': {
    //             target: devserver,
    //             bypass: function (req) {
    //                 if (req.url.startsWith('/static/bundle')) {
    //                     return req.url;
    //                 }
    //                 return false;
    //             }
    //         }
    //     },
    //     port: 8080
    // }
};
