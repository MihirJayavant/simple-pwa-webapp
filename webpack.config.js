var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
 });


module.exports = { 

    entry: './src/js/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //publicPath: '/dist'
      },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractPlugin.extract({
                        use: ['css-loader']
                    })
            },
            {
                test: /\.js$/,
                use: {loader: 'babel-loader', options: { presets: ['es2015'] }}
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: {loader: 'file-loader', options: {
                    outputPath: 'assets/',
                    publicPath: 'assets/'
                }}
            }
        ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ],

    devServer: {
        port: 1234
    }

}