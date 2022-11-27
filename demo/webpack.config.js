const path = require('path')

module.exports = {
    mode: 'development',
    entry: './simple/entry',
    output: {
        path: path.resolve(__dirname, 'simple'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(art|tpl)$/,
                loader: '../index.js'
            }
        ]
    },
    devServer: {
        static: './simple'
    }
}
