const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: './lambda-function/lambda.js',
    plugins: [
        new UglifyJsPlugin()
      ],
    output: {
      filename: 'bundle.js',
      libraryTarget: "umd"
    }
};