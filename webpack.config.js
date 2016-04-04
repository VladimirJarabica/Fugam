module.exports = {
	entry: "./private/js/main.js",
	output: {
		path: __dirname + '/public',
		filename: "main.bundle.js"
	},
	module: {
	 	loaders: [
	 	 	{ test: /\.scss$/, loader: "style!css!sass" },
		 	{
		 		test: /\.js$/,
		 		loader: 'babel-loader',
		 		exclude: /node_modules/,
		 		query: {
		 			presets: ['react', 'es2015']
		 		}
		 	}
	 	]
	}
};
