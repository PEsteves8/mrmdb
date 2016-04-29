var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');


module.exports = {
    entry: './app/main.js',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [{
            test: /\.js$/, // include .js files
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            loader: "jshint-loader",
        }],
        loaders: [{
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css', 'sass', 'postcss')
            }, {
                test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?name=fonts/[name].[ext]"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]"
            }
        ]
    },
    postcss: function() {
        return [autoprefixer];
    },
    jshint: {
        esversion: 6,
        emitErrors: false,
        failOnHint: false,
    },
    plugins: [
        new ExtractTextPlugin("./bundle.css")
    ]
};
