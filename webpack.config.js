const {resolve} = require('path'); //функция nodeJS
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');
const path = require('path');
const SRC = path.resolve(__dirname, './src/');
//const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');

module.exports = {
    entry: "./src/main.js", //не html не умеет работать 
    output: {
        path: resolve(__dirname, "build"),
        //filename: "main.bundle.js"
        filename: "main.[contenthash].js" // созд файла с хешом
    },
    module: {
        rules:[
            {
            //test: /\.css$/,
            test: /\.s[ac]ss$/i,  //подходят все файлы sass cscc css
            use: [/*
                // Creates `style` nodes from JS strings если без MiniCssExtractLoader
                "style-loader",*/
                MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ], //2 загрузчика установим для css и один для scss // лоадеры загружаются справа налево последовательность важна
        }, 
        {
            test: /\.mp3$/,
            include: SRC,
            use: 'file-loader'          
        },    
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }), 
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
       // new BundleAnalyzerPlugin(),
       //new LodashModuleReplacementPlugin(),
    ]
};
