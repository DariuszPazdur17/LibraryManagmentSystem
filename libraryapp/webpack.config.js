const path = require('path');

module.exports = {
    mode: 'development',
    entry: '.src\files\firebase.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    watch:true
}