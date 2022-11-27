const path = require('path')

module.exports = {
    mode: 'development',
    entry: './native/entry',
    output: {
        path: path.resolve(__dirname, 'native'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(art|tpl)$/,
                loader: '../index.js',
                options: {
                    format: 'native'
                }
            }
        ]
    },
    devServer: {
        static: './native'
    }
}
