const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions:['.js', '.jsx', 'css']
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use:['babel-loader'],
                exclude:'/node_modules/'
            },
            {
                test: /\.css$/i,
                use:['style-loader','css-loader'],
                exclude:'/node_modules/'
            }
        ]
    },
    devServer:{
        port: 3000
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
    
}