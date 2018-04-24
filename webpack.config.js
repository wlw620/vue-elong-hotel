const path = require('path');
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name]-bundle.min.js?[hash]',
        chunkFilename: '[name]-chunk.min.js?[hash]',
        publicPath: ''
    }
};