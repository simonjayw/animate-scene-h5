const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const PATHS = {
    public: path.join(__dirname, '../public'),
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
}

module.exports = {
    entry: {
        app: path.join(PATHS.src, 'index'),
    },
    output: {
        filename: '[name]-[hash:8].js',
        path: PATHS.dist,
    },
    // optimization: {
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //         cacheGroups: {
    //             // 将第三方模块提取出来
    //             vendors: {
    //                 test: /node_modules/,
    //                 name: 'vendors',
    //                 enforce: true,
    //                 chunks: 'initial',
    //             },
    //         },
    //     },
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader?cacheDirectory',
                ],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.scss'],
        alias: {
            '@': path.join(PATHS.src),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Demo',
            template: path.join(PATHS.public, 'index.html'),
            // favicon: path.join(PATHS.public, 'favicon.ico'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[hash:8].css',
        }),
    ],
}
