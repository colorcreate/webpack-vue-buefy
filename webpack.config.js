const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
    mode: 'development',
    devtool: "inline-source-map",
    entry:{
        app:'./src/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
		port: 3000,
		open: true
	},
    module:{
        rules:[
            {
                test: /\.vue$/,
                use:'vue-loader'
            },
            {
				test: /\.css$/,
				use: ["vue-style-loader", "css-loader"]
			},
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: "src/index.html" }),
        new VueLoaderPlugin()
    ]
}