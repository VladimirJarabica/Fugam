module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname + '/dist',
        filename: "main.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    }
};
