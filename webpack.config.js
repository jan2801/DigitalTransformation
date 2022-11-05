'use strict';

var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

    plugins: [
        new CleanWebpackPlugin(['view' ], {
            root: path.resolve(__dirname, './static/dist/'),
            verbose: true,
            dry: false,
            exclude: []
        }),
        new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true })
    ],

    context: __dirname + '/src/js/nodes/',

    entry : {
        mainpage: ['./mainpage.js'],
    },

    output: {
        path: path.resolve(__dirname, './static/dist/'),
        publicPath: '/static/dist/',
        filename: '[name].min.js',
        // chunkFilename: '[name].[chunkhash].min.js'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        extract : ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        }),
                        sass: ExtractTextPlugin.extract({
                            use: ['css-loader', 'sass-loader'],
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader!sass-loader",
                })
            },
        ],
    },

    resolve: {
        extensions: ['.vue', '.js'],
    },

    devServer: {
        historyApiFallback: true,
        noInfo: true
    },

    performance: {
        hints: false
    },
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            },
        }),
        // new UglifyJSPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);
}
