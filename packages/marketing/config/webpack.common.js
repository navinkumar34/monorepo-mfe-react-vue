module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.m?(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-react', {
                                runtime: 'automatic'
                            }],
                            '@babel/preset-env'
                        ],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                }
            }
        ]
    }
}