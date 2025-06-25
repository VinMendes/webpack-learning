const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        home: './src/home/home.js',
        login: './src/auth/login/login.js',
        signup: './src/auth/signup/signup.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: (pathData) => {
            if (pathData.chunk.name === 'home') {
                return 'home/home.js';
            }
            if (pathData.chunk.name === 'login') {
                return 'auth/login/login.js';
            }
            if (pathData.chunk.name === 'signup') {
                return 'auth/signup/signup.js';
            }
            return '[name].js';
        },
        clean: true,
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        open: ['/home/home.html'],
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'home/home.html',
            template: './src/home/home.html',
            chunks: ['home'],
        }),
        new HtmlWebpackPlugin({
            filename: 'auth/login/login.html',
            template: './src/auth/login/login.html',
            chunks: ['login'],
        }),
        new HtmlWebpackPlugin({
            filename: 'auth/signup/signup.html',
            template: './src/auth/signup/signup.html',
            chunks: ['signup'],
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/home/home.css', to: 'home/home.css' },
                { from: 'src/auth/login/login.css', to: 'auth/login/login.css' },
                { from: 'src/auth/signup/signup.css', to: 'auth/signup/signup.css' },
            ],
        }),
    ],
};