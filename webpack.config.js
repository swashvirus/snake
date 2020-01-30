const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        './snake': './snake.js'
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: '[name].min.js'
    },
    resolve: {
        modules: ['node_modules']
    }
}