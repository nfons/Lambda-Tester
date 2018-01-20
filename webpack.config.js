module.exports = {
    entry: './lambda-function/lambda.js',
    output: {
      filename: 'bundle.js',
      libraryTarget: "umd"
    }
};