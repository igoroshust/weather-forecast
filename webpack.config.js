const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, "/dist"), /* Корневой путь, текущий путь */
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", "jsx", ".json", ".ts", ".tsx"]
    },
    module: {
        rules: [
//            {
//                test: /\.js$/,
//                exclude: /node_modules/, /* Все JS, КРОМЕ node_modules */
//                use: {
//                    loader: "babel-loader"
//                }
//            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}