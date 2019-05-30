const path = require('path')

const PATHS = {
    public: path.join(__dirname, './public'),
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
}

module.exports = {
    entry: {
        app: [
            path.join(PATHS.src, 'index'),
        ],
        // vendor: ['react', 'react-dom', 'react-router-dom'],
    },
    output: {
        filename: '[name]-[hash:8].js',
        // publicPath: PATHS.public,
        path: PATHS.dist,
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                // 将第三方模块提取出来
                vendors: {
                    test: /node_modules/,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'initial',
                },
            },
        },
    },
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
                test: /\.sass$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
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
    ],
}
