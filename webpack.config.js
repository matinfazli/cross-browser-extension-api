// paths
const path = require('path');

module.exports = {
    context: path.join(__dirname, './src'),
    entry: './index.ts',
    output: {
        path: path.join(__dirname, './build'),
        filename: 'index.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    }
};
